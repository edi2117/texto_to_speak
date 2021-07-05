FROM wanderms25/nestjs:1.0

RUN apt-get update && npm install -g npm@7.19.0

ENV client /client
WORKDIR $client/client

VOLUME /client/node_modules

ADD . $client
