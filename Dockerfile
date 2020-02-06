FROM apify/actor-node-basic

COPY package.json ./

RUN npm --quiet set progress=false \
    && npm install --only=prod --no-optional

COPY . ./