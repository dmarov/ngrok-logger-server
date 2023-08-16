# syntax=docker/dockerfile:1
FROM archlinux AS image-build

# zsh used for operating inside docker container
RUN pacman -Syu zsh node

WORKDIR /app

ARG HOST_USER_ID=1000
ARG HOST_GROUP_ID=1000
ARG USER_NAME=user

# create user if not exist
RUN addgroup -S ${HOST_GROUP_ID} &&\
 adduser\
 --disabled-password\
 --gecos ""\
 --ingroup "${HOST_GROUP_ID}"\
 --uid "${HOST_USER_ID}"\
 "${USER_NAME}" || true

# act as non-root user inside container (1000:1000 by default)
USER ${HOST_USER_ID}:${HOST_GROUP_ID}

COPY docker/entrypoint.sh entrypoint.sh

# create empty config in order to avoid initial prompt
RUN touch ~/.zshrc
