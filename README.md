# Simple server available from the outside for testing purposes

## Set environment variables

```
export NGROK_AUTH_TOKEN='{MY_SECRET_TOKEN}' # optional
export NGROK_STATIC_DOMAIN='{MY_STATIC_DOMAIN}' # optional
export HOST_USER_ID='1001' # 1000 by default
export HOST_GROUP_ID='1001' # 1000 by default
```

## Run server

```
docker compose up
```

url of the server will be printed out in console 

## Available methods

- 'GET /' - dummy response
- 'POST /set-cookie' - sets cookie 'my-secret-cookie'='312sd6f7sdfkjqwe9'
- 'POST /reflect' - returns request's content in response body
- 'POST /authorize' - returns 401 status if cookie 'auth-cookie' != '312sd6f7sdfkjqwe9'
- 'POST /dummy' - returns dummy response with headers and cookies
- 'ALL /all/**' - returns request's content in response body
