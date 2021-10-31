FROM node:14.15.1-alpine3.12 as base

WORKDIR /workspace

FROM base as compiler

FROM base as development-server

COPY packages/frontend/*.* ./
COPY yarn.lock yarn.lock

RUN yarn install

ENTRYPOINT [ "yarn" ]

CMD [ "develop" ]

FROM base as distribution-server

COPY packages/frontend/ ./

RUN yarn install

ENTRYPOINT [ "yarn" ]

CMD [ "develop" ]
