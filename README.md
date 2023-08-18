# BigBlueButton Streaming v1

Use this app to live stream your BigBlueButton classes to Youtube or Facebook.

When you want hundreds, or even thousands of users, to join your BigBlueButton classes, you may not be able to use regular BigBlueButton setup, as that is limited to around 100 users per session. Then live streaming to your users is a powerful solution.   

### How it works?

All you need is Docker running on your machine and a media server such as Youtube or Facebook to stream to.

Once you fetch bbb-streaming on your BigBlueButton server, you need to update a few environment variables including access to your BigBlueButton server, ID of the BigBlueButton meeting/class that you want to stream, Password of the meeting and Youtube or Facebook RTMP url (see below).

After changing environment variables, start the streaming and start your BigBlueButton class. 

You will notice that the live streaming bot joins your BigBlueButto class with the name `Live Stream`. 

On your Youtube or Facebook live streaming page (see below), you would notice your class getting streamed into. 

Share the streaming URL with your users to view the live streaming of your class. 

## Install

```sh
#clone the repo
git clone https://github.com/manishkatyan/bbb-streaming.git

#run the installation script
cd bbb-streaming
bash install-bbb-streaming.sh

#update the env
vi env

```

### To start streaming run the following 
`bash start-streaming.sh`

### To stop streaming run the following 
`bash stop-streaming.sh`


## Streaming with API-MATE
```sh
# Get API-MATE URL
bbb-conf --secret
# Ensure MEETINGID and MEETING_PASSWORD is the same in API-MATE and env file
```

You can use API-MATE to quickly test streaming functionality.

Get API-MATE url as shown above and open it in a Google Chrome browser. Ensure that meetingID and meeting password in API-MATE is the same as in env file. 

First click on create URL and then join as a moderator. 

You will get into BigBlueButton session as a moderator. 

Go to 'bbb-streaming' directory and start the streaming, if it's not already running.

You would notice a new user `Live Stream` has joined your BigBlueButton session. 



## Streaming on Youtube
```sh
# Edit env file to update RTMP_URL for Youtube
RTMP_URL=rtmp://a.rtmp.youtube.com/live2/wf28-fttr-0228-uvas-d5hh

#Restart the streaming
bash restart-streaming.sh
```
Go to [Youtube Studio](https://www.youtube.com/live_dashboard_splash?nv=1)
Copy Stream URL and Stream key and combine them, as shown above, to create `RTMP_URL` in env file.

Restart the streaming. 

## Streaming on Facebook
```sh
# Edit env file to update RTMP_URL for Facebook
RTMP_URL="rtmps://live-api-s.facebook.com:443/rtmp/FB-1263745904047554-0-abcabcabc123"

#Restart the streaming
bash restart-streaming.sh
```
Go to the Facebook page where you want to live stream and click on `Create > Live`. Select `Use Stream Key` as the method that you want to live strem with. Copy `Server URL` and `Stream Key`, joining them together, to form the value of `RTMP_URL` in env file.

Restart the streaming.

Use API-MATE (see above) to test live streaming on Facebook.

On your Facebook live streaming page, you would notice the video of your BigBlueButton class is being shown. Click on `Go Live` to start live streaming. 

You have several ways to share live streaming url with your users including:
- Show Live Tab on Page: Example - https://www.facebook.com/higheredlab/live/ 
- Live Video URL: Example - https://www.facebook.com/higheredlab/videos/408835117173971/
- Embed Live Video: You can embed live video into any page on your website

Your users can use Facebook chat, shown along side live streaming video, to interact during the live streaming. 

## 🚀 <a href="https://higheredlab.com/bigbluebutton" target="_blank">Stress-free BigBlueButton hosting! Start free Trial</a>

**Save big with our affordable BigBlueButton hosting.**

- Bare metal servers for HD video
- 40% lower hosting costs
- Top-rated tech support, 100% uptime
- Upgrade / cancel anytime
- 2 weeks free trial; No credit card needed

<a href="https://higheredlab.com/bigbluebutton" target="_blank"><strong>Start Free Trial</strong></a>
  

### [100 Most Googled Questions on BigBlueButton](https://higheredlab.com/bigbluebutton-guide/)

Everything you need to know about BigBlueButton including pricing, comparison with Zoom, Moodle integrations, scaling, and dozens of troubleshooting.

