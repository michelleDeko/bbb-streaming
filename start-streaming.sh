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
if [ -z $MEETING_ID ]; then
    echo "Error: MEETING_ID cannot be empty"
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

docker run --rm  -d\
                --name bbb-streaming \
                --env-file $(pwd)/env \
                manishkatyan/bbb-streaming:v2.5.1
