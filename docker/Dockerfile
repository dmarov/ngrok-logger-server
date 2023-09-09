# syntax=docker/dockerfile:1
FROM archlinux AS image-build

# zsh used for operating inside docker container
RUN pacman --noconfirm -Syu zsh nodejs npm

RUN curl https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz --output ngrok.tgz &&\
 tar xvzf ./ngrok.tgz -C /usr/local/bin

WORKDIR /app

ARG HOST_USER_ID=1000
ARG HOST_GROUP_ID=1000
ARG USER_NAME=user
ARG NGROK_AUTH_TOKEN=

# create user if not exist
RUN useradd -m -s /usr/bin/zsh -u "${HOST_USER_ID}" "${USER_NAME}"
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# act as non-root user inside container (1000:1000 by default)
USER ${HOST_USER_ID}:${HOST_GROUP_ID}

# create empty config in order to avoid initial prompt
RUN touch ~/.zshrc

CMD ["/bin/sh", "-c", "/entrypoint.sh"]
