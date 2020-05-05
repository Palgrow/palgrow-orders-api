FROM boiyaa/google-cloud-sdk-nodejs:latest

ARG PORT
ENV PORT=${PORT}

ARG APP_SECRET
ENV APP_SECRET=${APP_SECRET}

ARG RAVEN_CONFIG_URL
ENV RAVEN_CONFIG_URL=${RAVEN_CONFIG_URL}

ARG MONGO_URL
ENV MONGO_URL=${MONGO_URL}

ARG REDIS_HOST
ENV REDIS_HOST=${REDIS_HOST}

ARG REDIS_PORT
ENV REDIS_PORT=${REDIS_PORT}

ARG API_BASE_URL
ENV API_BASE_URL=${API_BASE_URL}

ARG GC_BUCKET_NAME
ENV GC_BUCKET_NAME=${GC_BUCKET_NAME}

WORKDIR /usr/src/app
COPY ./application/package.json .
RUN npm install

RUN gsutil cp gs://palgrow-staging/keys/gc_credentials.json .

RUN touch .env

ENV GOOGLE_APPLICATION_CREDENTIALS='/usr/src/app/gc_credentials.json'

EXPOSE 1337

CMD [ "npm", "start" ]

COPY ./application/ .

#RUN npm test
