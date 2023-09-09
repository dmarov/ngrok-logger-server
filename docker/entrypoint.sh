#!/bin/bash

# Start web server
npm install && npx nodemon index.js &

if [ ! -z "$NGROK_AUTH_TOKEN" ]
then
    ngrok config add-authtoken $NGROK_AUTH_TOKEN
    echo "ngrok auth token set"
fi

if [ ! -z "$NGROK_STATIC_DOMAIN" ]
then
    echo "Static domain found"
    echo "Starting at https://$NGROK_STATIC_DOMAIN"
    # Start ngrok tunnel
    ngrok http --domain=$NGROK_STATIC_DOMAIN 3243 --log ./ngrok-log.txt &
else
    echo "Static domain not found"
    echo "Will use auto-generated domain"
    rm ./ngrok-log.txt || true
    ngrok http 3243 --log ./ngrok-log.txt &
    sleep 1
    cat ./ngrok-log.txt | grep "msg=\"started tunnel\"" | grep -oP "url=.*$"
fi

# Wait for any process to exit
wait -n
# Exit with status of process that exited first
exit $?
