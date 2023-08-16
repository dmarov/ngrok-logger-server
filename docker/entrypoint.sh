#!/bin/bash

# Start web server
node index.js &

# Start ngrok tunnel
ngrok http localhost:3243 &

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?

