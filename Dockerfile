FROM node:20-alpine3.19 AS base

FROM base AS node-build-stage

RUN apk add --no-cache libc6-compat

COPY package.json .

RUN npm i

FROM base AS node-run-stage

ARG APP_HOME=/app
ARG USERNAME=node_user
ARG GROUPNAME=node_group
ARG USER_UID=1001
ARG USER_GID=1001

WORKDIR ${APP_HOME}

COPY --from=node-build-stage /node_modules ./node_modules

COPY . ${APP_HOME}

RUN addgroup -g ${USER_GID} -S ${GROUPNAME} \
    && adduser -S ${USERNAME} -u ${USER_UID} -S ${GROUPNAME}

RUN chown -R ${USERNAME}:${GROUPNAME} ${APP_HOME}

USER ${USERNAME}

EXPOSE 3000

RUN npm run build

CMD [ "npm", "run", "start" ]

