FROM node:18-bullseye-slim

RUN apt-get update && apt-get install -y curl gnupg psmisc wget \
  && mkdir -p /etc/apt/keyrings \
  && curl -fsSL https://dl-ssl.google.com/linux/linux_signing_key.pub | tee /etc/apt/keyrings/google-chrome.asc > /dev/null \
  && echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/google-chrome.asc] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google.list \
  && apt-get update \
  && apt-get install -y google-chrome-stable xvfb ffmpeg \
  && rm -rf /var/lib/apt/lists/*

RUN wget https://chrome-versions.com/google-chrome-stable-104.0.5112.101-1.deb
RUN dpkg -i google-chrome-stable-104.0.5112.101-1.deb

RUN wget https://debian.sipwise.com/debian-security/pool/main/f/ffmpeg/ffmpeg_4.3.5-0+deb11u1_amd64.deb
RUN dpkg -i ffmpeg_4.3.5-0+deb11u1_amd64.deb

WORKDIR /usr/src/app
RUN rm -rf node_modules

COPY package.* .
RUN npm install
COPY stream.js ./stream.js

CMD ["node", "stream.js"]
