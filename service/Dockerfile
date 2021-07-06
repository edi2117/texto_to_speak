FROM wanderms25/nestjs:1.0

RUN apt-get update && npm install -g npm@7.19.0

ENV service /service
WORKDIR $service/service

VOLUME /service/node_modules

ADD . $service