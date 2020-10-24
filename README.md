# BBB Live Streaming

Livestream your BigBlueButton classes to Youtube or Facebook.

## Getting Started

### How it works?

All you need is Docker running on your machine and a media server such as Youtube or Facebook to stream to.

Once you fetch bbb-streaming on your BigBlueButton server, you need to update a few environment variables including access to your BigBlueButton server, ID of the BigBlueButton meeting/class that you want to stream and Youtube or Facebook RTMP url (see below).

After changing environment variables, start the docker container and start your BigBlueButton class. You will notice a new user with the name `live` joined your class. In your Youtube or Facebook streaming dashboard, you would notice your class getting streamed into. Share the streaming URL with your users to view the livestreaming of your class. 

### Installing Docker
```ssh
apt install apt-transport-https ca-certificates curl software-properties-common
apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
add-apt-repository “deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable”
apt update
apt install docker-ce
```

### Installing Docker Compose
```ssh
curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

### Fetching bbb-streaming
```sh
wget -O docker-compose.yml https://raw.githubusercontent.com/manishkatyan/bbb-streaming/master/examples/docker-compose.yml.example
# change configuration
docker-compose up -d
docker-compose down
``` 

### Set Environment Variable

You need to set some environment variables to run the container.

#### Required settings
* BBB_URL - URL to BBB including http/https e.g. https://your_BigBlueButton_server/bigbluebutton/api
* BBB_MEETING_ID - ID of the BBB Meeting (You can get the ID via an API call: https://your_bbb_server/bigbluebutton/api/getMeetings?checksum=<checksum>)
* BBB_SECRET - Secret of your BBB installation (You can get the secret with: bbb-conf --secret)
* BBB_STREAM_URL - URL of your streaming server including rtmp. (Example Youtube: rtmp://a.rtmp.youtube.com/live2/wf24-fttr-0228-uvas-d5hh, Facebook: rtmps://live-api-s.facebook.com:443/rtmp/3723139434365952?s_bl=1&s_ps=1&s_psm=1&s_sw=0&s_vt=api-s&a=Abzo1Ejb-3Wh_7qt)

#### Optional settings
* BBB_START_MEETING - start meeting
* BBB_ATTENDEE_PASSWORD - attendee password (optional - has to be set to the attendee password of moodle/greenlight or any other frontend to allow joining via their links)
* BBB_MODERATOR_PASSWORD - moderator password (optional - has to be set to the moderator password of moodle/greenlight or any other frontend to allow joining via their links)
* BBB_MEETING_TITLE - meeting title (optional - only works if the meeting is started by the liveStreaming)
* BBB_DOWNLOAD_MEETING= - download / save BigBlueButton meeting in lossless mkv format
* BBB_INTRO= - play intro file (can be a local file in videodata folder e.g. /video/intro.mp4 or a url of a mediastream e.g. https://my.intro.stream)
* BBB_BEGIN_INTRO_AT=04:40 - begin the intro at position (optional, e.g. 00:00:05)
* BBB_END_INTRO_AT= - end intro after (optional, e.g. 01:00:00 - after one hour)
* BBB_USER_NAME - the username to join the meeting. (Default: Live)
* BBB_SHOW_CHAT - shows the chat on the left side of the window (Default: false)
* TZ - Timezone (Default: Europe/Vienna)


## Streaming with API-MATE
```sh
# Get API-MATE URL
bbb-conf --secret
# Ensure meetingId and attendeePW is the same in API-MATE and docker-compose.yml
# Restart docker
```
You can use API-MATE to quickly test streaming functionality.
Get API-MATE url as shown above and open it in a Google Chrome browser. Ensure that meetingID and attendee Password in API-MATE is the same as in docker-compose.yml. First click on create URL and then join as a moderator. 

You will get into BigBlueButton session as a moderator. 

Go to 'bbb-streaming' directory and start the docker. 

## Streaming on YouTube
```sh
# vi docker-compose.yml
BBB_STREAM_URL=rtmp://a.rtmp.youtube.com/live2/STREAM_KEY
docker-compose up -d
```
Go to [YouTube Studio](https://www.youtube.com/live_dashboard_splash?nv=1)
Copy Stream URL and Stream key and combine them, as shown above, to create `BBB_STREAM_URL` in docker-compose.yml.

Restart docker. 

## Known Limitations
* the streamer does not reconnect, if the connection to BigBlueButton gets lost
* when using breakoutrooms, the streamer will show the popup of the invitation and not be able to get back to the conference

