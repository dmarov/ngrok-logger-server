const Koa = require('koa');
const Router = require('@koa/router');
const { bodyParser } = require('@koa/bodyparser');

const app = new Koa();
const router = new Router();

router.use(async (ctx, next) => {
  console.log(ctx.request);
  console.log(new Date());
  console.log("\n");
  next();
});

router.get('/', (ctx, next) => {
  ctx.body = {
    message: "Hello World",
    obj: { 
      field1: "a",
      field2: "b",
      field3: "b",
      field4: "b",
      field5: "b",
      field6: "b",
      field7: "b",
      field8: "b",
      field9: "b",
      field10: "b",
      field11: "b",
    },
  };
  next();
});

router.post('/set-cookie', (ctx, next) => {
  ctx.cookies.set('my-secret-cookie', '312sd6f7sdfkjqwe9');
  ctx.body = {};
  next();
});

router.post('/authorize', (ctx, next) => {
  if (ctx.cookies.get('auth-cookie') !== '312sd6f7sdfkjqwe9') {
    ctx.status = 401;
    ctx.body = {};
    next();
    return;
  }

  ctx.body = {};
  next();
});

router.all('/reflect/(.*)', (ctx, next) => {
  ctx.body = {
    method: ctx.request.method,
    url: ctx.request.url,
    headers: ctx.request.headers,
    body: ctx.request.body,
  };
  next();
});

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3243);
