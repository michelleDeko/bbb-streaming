const { launch, getStream } = require("puppeteer-stream");
const bbb = require("bigbluebutton-js");
const Xvfb = require("xvfb");
const { spawn } = require('node:child_process')


let browser, page, pages, bbbStream, ffmpeg;

let disp_num = Math.floor(Math.random() * (200 - 99) + 99);

let [width, height] = [1280, 800]

if (process.env.STREAMING_RESOLUTION) {
    [width, height] = process.env.STREAMING_RESOLUTION.split('x')
}

const bbbServer = {
    bbbUrl: process.env.BBB_URL,
    bbbSecret: process.env.BBB_SECRET,
    meetingId: process.env.MEETING_ID,
    rtmpUrl: process.env.RTMP_URL,
    showPresentation: process.env.SHOW_PRESENTATION,
}

let xvfb = new Xvfb({
    displayNum: disp_num,
    silent: true,
    xvfb_args: [
        "-screen",
        "0",
        `${parseInt(width)}x${parseInt(height)}x24`,
        "-ac",
        "-nolisten",
        "tcp",
        "-dpi",
        "96",
        "+extension",
        "RANDR",
    ],
});

const options = {
    headless: false,
    executablePath: "/usr/bin/google-chrome",
    args: [
        "--disable-infobars",
        "--no-sandbox",
        "--shm-size=2gb",
        "--disable-dev-shm-usage",
        "--start-fullscreen",
        "--app=https://www.google.com/",
        `--window-size=${width},${height}`,
        "--autoplay-policy=no-user-gesture-required",
        "--use-fake-ui-for-media-stream",
        "--use-fake-device-for-media-stream",
    ],
};



async function main() {

    const api = bbb.api(bbbServer.bbbUrl, bbbServer.bbbSecret);
    const http = bbb.http;

    var meetingRunning = await isMeetingRunning(bbbServer.meetingId);

    while (!meetingRunning) {
        meetingRunning = await isMeetingRunning(bbbServer.meetingId);
        console.log("Meeting is not running. The bot will check in 5 sec ...");
        await timer(5000);
    }

    var bbbJoinParams = {
        "userdata-bbb_force_listen_only": "true",
        "userdata-bbb_listen_only_mode": "true",
        "userdata-bbb_skip_check_audio": "true",
        "userdata-bbb_show_public_chat_on_login": "true",
        "role": "VIEWER"
    };

    if (!bbbServer.showPresentation) {
        bbbJoinParams["userdata-bbb_auto_swap_layout"] = "true";
    }

    let url = api.administration.join(
        "Live Stream",
        bbbServer.meetingId,
        process.env.MEETING_PASSWORD,
        bbbJoinParams
    );
    console.log("BBB Url: ", url);


    try {

        xvfb.startSync();
        browser = await launch(options);
        pages = await browser.pages();

        page = pages[0];

        await page._client.send("Emulation.clearDeviceMetricsOverride");

        await page.goto(url, { waitUntil: "networkidle2" }).catch((e) => {
            console.error("URL unreachable: ", url);
            process.exit(2);
        });
        await page.setBypassCSP(true);

        //Select Listen Only Mode
        try {
        await page.waitForXPath("//button[contains(@aria-label, 'Listen only')]", { timeout: 5000 });
        const buttons = await page.$x("//button[contains(@aria-label, 'Listen only')]");
        if (buttons.length > 0) {
                await buttons[0].click();
                await page.waitForTimeout(5000);
        } else {
                console.log("Listen only button not found");
                await page.evaluate(() => {
                console.log("Alle Buttons:");
                document.querySelectorAll("button").forEach(b => console.log(b.innerText, b.getAttribute("aria-label")));
                });

        }

        }

        // Hides user list and chat is true
        await page.waitForSelector('[aria-label="Users and messages toggle"]');
        await page.click('[aria-label="Users and messages toggle"]', {
            waitUntil: "domcontentloaded",
        });
        await page.waitForTimeout(5000);

        await page.$eval(
            ".Toastify",
            (element) => (element.style.display = "none")
        ); // Hide Toast alerts

        try {

            await page.waitForSelector('button[aria-label="Leave audio"]'); // Wait until Change/Leave audio button appearence

            await page.$eval(
                '[aria-label="Actions bar"]',
                (element) => (element.style.display = "none")
            );
        } catch (error) {
            console.log(error)
        }

        await page.$eval(
            '[aria-label="Users and messages toggle"]',
            (element) => (element.style.display = "none")
        );


        console.log("The streaming bot has joined the BBB session");
        console.log("Streaming has started...");


        bbbStream = await getStream(page, {
            audio: true,
            video: true,
            audioBitsPerSecond: 128000,
            videoBitsPerSecond: 2500000,
            frameSize: 30,
            ignoreMutedMedia: true,
            mimeType: 'video/webm;codecs=h264'
        });

        // On stream data  write it to ffmpeg stdin
        bbbStream.on('data', (chunk) => {
            if (ffmpeg) {
                ffmpeg.stdin.write(chunk);
            }
        });

        // on stream data write it to ffmpeg stdin

        ffmpeg = spawn('ffmpeg', [
            "-y", "-nostats",
            "-thread_queue_size", "4096",

            // FFmpeg will read input video from STDIN
            '-i', '-',

            // If we're encoding H.264 in-browser, we can set the video codec to 'copy'
            // so that we don't waste any CPU and quality with unnecessary transcoding.
            '-vcodec', 'copy',

            // use if you need for smooth youtube publishing. Note: will use more CPU
            // '-vcodec', 'libx264',
            // '-x264-params', 'keyint=120:scenecut=0',

            //No browser currently supports encoding AAC, so we must transcode the audio to AAC here on the server.
            '-acodec', 'aac',
            "-b:a", "160k",

            // remove background noise. You can adjust this values according to your need
            //'-af', 'highpass=f=200, lowpass=f=3000',

            // This option sets the size of this buffer, in packets, for the matching output stream
            "-max_muxing_queue_size", '99999',
            "-ar", "48000",
            "-threads", "0",
            "-b:v", "4000k",
            "-maxrate", "4000k",
            "-minrate", "2000k",
            "-bufsize", "8000k",
            "-g", "60",
            "-preset", "ultrafast",
            "-tune", "zerolatency",

            // FLV is the container format used in conjunction with RTMP
            "-f", "flv",
            "-flvflags", "no_duration_filesize",
            bbbServer.rtmpUrl
        ])


        ffmpeg.on('close', (code, signal) => {
            console.log('FFmpeg child process closed, code ' + code + ', signal ' + signal);
            stopFfmpeg();
        });

        ffmpeg.stdin.on('error', (e) => {
            console.log('FFmpeg STDIN Error', e);
        });

        ffmpeg.stderr.on('data', (data) => {
            console.log('FFmpeg STDERR:', data.toString());
        });
        await page.waitForSelector('[data-test="meetingEndedModalTitle"]', {
            timeout: 0,
        });
        console.log("The BBB session has ended");
    } catch (error) {
        console.log(error);
    } finally {
        ffmpeg.kill('SIGINT');
        stopFfmpeg();

        await bbbStream.destroy()
        page.close && (await page.close());
        browser.close && (await browser.close());
        xvfb.stopSync();
        console.log("Exiting...");
    }

    function isMeetingRunning(meetingID) {
        let meet = api.monitoring.isMeetingRunning(meetingID);
        var status = http(meet).then((result) => {
            return result["running"];
        });
        return status;
    }

    function timer(ms) {
        return new Promise((res) => setTimeout(res, ms));
    }
}

function stopFfmpeg() {
    exec("killall node && killall ffmpeg ");
}

main()
