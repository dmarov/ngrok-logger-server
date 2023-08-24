# Simple server available from the outside for testing purposes


## Run server

```
docker compose up
```

url of the server will be printed in console 

## Available methods

- get / -dummy response
- post /set-cookie - sets cookie 'my-secret-cookie'='312sd6f7sdfkjqwe9'
- post /reflect - returns request's content in response body
- post /authorize - returns 401 status if cookie 'auth-cookie' != '312sd6f7sdfkjqwe9'
- post /dummy - returns dummy response with headers and cookies
