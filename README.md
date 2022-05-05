# bbb-streaming

Use this app to live stream your BigBlueButton classes to Youtube or Facebook.

When you want hundreds, or even thousands of users, to join your BigBlueButton classes, you may not be able to use regular BigBlueButton setup, as that is limited to around 100 users per session. Then live streaming to your users is a powerful solution.   

### How it works?

All you need is Docker running on your machine and a media server such as Youtube or Facebook to stream to.

Once you fetch bbb-streaming on your BigBlueButton server, you need to update a few environment variables including access to your BigBlueButton server, ID of the BigBlueButton meeting/class that you want to stream and Youtube or Facebook RTMP url (see below).

After changing environment variables, start the docker container and start your BigBlueButton class. 

You will notice that the live streaming bot joins your BigBlueButto class with the name `Live`. 

On your Youtube or Facebook live streaming page (see below), you would notice your class getting streamed into. 

Share the streaming URL with your users to view the live streaming of your class. 

## Install

```sh
#clone the repo
git clone https://github.com/manishkatyan/bbb-streaming.git

#run the installa script
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

You would notice a new user `Live` has joined your BigBlueButton session. 



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
RTMP_URL="rtmps://live-api-s.facebook.com:443/rtmp/3723139434365952?s_bl=1&s_ps=1&s_psm=1&s_sw=0&s_vt=api-s&a=Abzo1Ejb-3Gh_7et"

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

## [BigBlueButton Tech Support](https://higheredlab.com/bigbluebutton-support/)
### Are you facing difficulties with your BigBlueButton server?
Lean on our expertise to smoothly run your BigBlueButton server. We can: 
1. troubleshoot your BigBlueButton servers to improve audio and video performance,
1. install additional features such as streaming, mp4 recordings and attendance, and
1. provide managed BigBlueButton servers, starting at $12 per month

[Click here to learn more](https://higheredlab.com/bigbluebutton-support/)

## More on BigBlueButton

Check-out the following apps to further extend features of BBB.
  
### [bbb-jamboard](https://github.com/manishkatyan/bbb-jamboard)

The default whiteboard of BigBlueButton has limited features including no eraser. Many teachers wish to have a more features-rich whiteboard that would help them better in conducting online classes.

With BBB-Jamboard, you can easily integrate Google Jamboard into your BigBlueButton server.

Jamboard is a digital interactive whiteboard developed by Google and can be used in stead of the default BugBlueButton whiteboard. Google Jamboard has the eraser feature that has often been requested by BigBlueButton users.

### [bbb-mp4](https://github.com/manishkatyan/bbb-mp4)
With this app, you can convert a BigBlueButton recording into MP4 video and upload to S3. You can convert multiple MP4 videos in parallel or automate the conversion process.

### [bbb-twilio](https://github.com/manishkatyan/bbb-twilio)

Integrate Twilio into BigBlueButton so that users can join a meeting with a dial-in number. You can get local numbers for almost all the countries.

### [bbb-optimize](https://github.com/manishkatyan/bbb-customize)

Better audio quality, increase recording processing speed, dynamic video profile, pagination, fix 1007/1020 errors and use apply-config.sh to manage your customizations are some key techniques for you to optimize and smoothly run your BigBlueButton servers.
  
### [bbb-admin](https://github.com/manishkatyan/bbb-admin)

Scripts for BigBlueButton admins including extracting IP of users joining, participants attendance, poll answers and many other analytics. 
  
  
### [bbb-recording-server](https://github.com/manishkatyan/bbb-recording-server)

With this app, you can process BigBlueButton recordings on a separate server, called BBB Recording Server. Separation of recordings from BigBlueButton (client) improves performance as all server resources are dedicated towards conducting live classes.
  

### [100 Most Googled Questions on BigBlueButton](https://higheredlab.com/bigbluebutton-guide/)

Everything you need to know about BigBlueButton including pricing, comparison with Zoom, Moodle integrations, scaling, and dozens of troubleshooting.

