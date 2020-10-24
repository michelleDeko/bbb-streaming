# BBB Live Streaming

Streams a given BBB Meeting to an RTMP Server.

*License:*   [GNU GPL v3 or later](http://www.gnu.org/copyleft/gpl.html)

## Getting Started

### Prerequisites

All you need is Docker running on your machine and a media server to stream to.

### Configuration

You need to set some environment variables to run the container.

#### Required settings
* BBB_URL - URL to BBB including http/https e.g. https://your_BigBlueButton_server/bigbluebutton/api
* BBB_MEETING_ID - ID of the BBB Meeting (You can get the ID via an API call: https://your_bbb_server/bigbluebutton/api/getMeetings?checksum=<checksum>)
* BBB_SECRET - Secret of your BBB installation (You can get the secret with: bbb-conf --secret)
* BBB_STREAM_URL - URL of your streaming server including rtmp. Leave out to disable streaming. (e.g. rtmp://media_server_url/stream/stream_key)

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

### Starting liveStreaming
```sh
wget -O docker-compose.yml https://raw.githubusercontent.com/manishkatyan/bbb-streaming/master/examples/docker-compose.yml.example
# change configuration
docker-compose up -d
docker-compose down
``` 

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

