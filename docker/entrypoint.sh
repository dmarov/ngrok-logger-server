#!/bin/bash

rm ./ngrok-log.txt

# Start web server
node index.js &

# Start ngrok tunnel
ngrok http 3243 --log ./ngrok-log.txt &

sleep 1

cat ./ngrok-log.txt | grep "msg=\"started tunnel\"" | grep -oP "url=.*$"

# Wait for any process to exit
wait -n
# Exit with status of process that exited first
exit $?
