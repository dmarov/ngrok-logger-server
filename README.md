# Simple server available from the outside for testing purposes


## Run server

```
docker compose up
```

url of the server will be printed in console 

## Available methods

- 'GET /' - dummy response
- 'POST /set-cookie' - sets cookie 'my-secret-cookie'='312sd6f7sdfkjqwe9'
- 'POST /reflect' - returns request's content in response body
- 'POST /authorize' - returns 401 status if cookie 'auth-cookie' != '312sd6f7sdfkjqwe9'
- 'POST /dummy' - returns dummy response with headers and cookies
