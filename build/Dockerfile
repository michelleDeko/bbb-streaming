FROM node:18-bullseye-slim

RUN apt-get update && apt-get install -y curl gnupg psmisc wget \
  && mkdir -p /etc/apt/keyrings \
  && curl -fsSL https://dl-ssl.google.com/linux/linux_signing_key.pub | tee /etc/apt/keyrings/google-chrome.asc > /dev/null \
  && echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/google-chrome.asc] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google.list \
  && apt-get update \
  && apt-get install -y google-chrome-stable xvfb ffmpeg \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app
RUN rm -rf node_modules

COPY package.* .
RUN npm install
COPY stream.js ./stream.js

CMD ["node", "stream.js"]
