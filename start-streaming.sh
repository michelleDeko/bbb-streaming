#!/bin/bash

test ! -f ./env && echo "Unable to find the env file" && echo "No such file $(pwd)/env" && exit 0

set -a
source <(cat  ./env | \
    sed -e '/^#/d;/^\s*$/d' -e "s/'/'\\\''/g" -e "s/=\(.*\)/='\1'/g")
set +a


if [ -z $BBB_URL ]; then
    echo "Error: BBB_URL cannot be empty"
    exit 0
fi
if [ -z $BBB_SECRET ]; then
    echo "Error: BBB_SECRET cannot be empty"
    exit 0
fi
if [ -z $MEETINGID ]; then
    echo "Error: MEETINGID cannot be empty"
    exit 0
fi
if [ -z $MEETING_PASSWORD ]; then
    echo "Error: MEETING_PASSWORD cannot be empty" 
    exit 0
fi
if [ -z $RTMP_URL ]; then
    echo "Error: RTMP_URL cannot be empty"
    exit 0
fi
if [ -z $SHOW_PRESENTATION ]; then
    echo "Error: SHOW_PRESENTATION cannot be empty"
    exit 0
fi

docker run --rm -d \
                --name bbb-streaming \
               -p "4040:4000" \
               manishkatyan/bbb-streaming:v2.0.1


until [ "`docker inspect -f {{.State.Running}} bbb-streaming`" == "true" ]; do
   echo "waiting for the bbb-streaming... "
    sleep 2;
done;

sleep 5
echo "Starting streaming..."
curl -X POST -H 'Content-Type: application/json' \
             -d "{\"bbbUrl\":\"$BBB_URL\",\"bbbSecret\":\"$BBB_SECRET\",\"meetingId\": $MEETINGID,\"meetingPassword\": $MEETING_PASSWORD,\"rtmpUrl\": $RTMP_URL,\"showPresentation\": $SHOW_PRESENTATION,\"isThirdParty\": true }" \
             http://localhost:4040/bot/start