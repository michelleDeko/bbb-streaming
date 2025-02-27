FROM node:18-bullseye-slim


RUN apt-get update && apt-get install curl gnupg psmisc wget -y \
  && curl --location --silent https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install google-chrome-stable  xvfb  ffmpeg -y  \
  && rm -rf /var/lib/apt/lists/*

RUN echo ""> /etc/apt/sources.list.d/google.list


RUN apt update -y && apt remove google-chrome-stable -y &&  wget --no-verbose -O /tmp/chrome.deb  http://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_104.0.5112.101-1_amd64.deb \
  && apt install -y /tmp/chrome.deb \
  && rm /tmp/chrome.deb

WORKDIR /usr/src/app
RUN rm -rf node_modules

COPY package.* .
RUN npm install
COPY build/stream.js ./stream.js

CMD ["node","stream.js" ]

