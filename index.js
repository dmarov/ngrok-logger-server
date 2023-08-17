const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.use(async (ctx, next) => {
  console.log(ctx.request);
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

router.get('/set-cookie', (ctx, next) => {
  ctx.cookies.set('my-secret-cookie', '312sd6f7sdfkjqwe9');
  next();
});

router.get('/reflect', (ctx, next) => {
  ctx.body = ctx.request;
  next();
});

router.get('/authorize', (ctx, next) => {
  if (ctx.cookies.get('auth-cookie') !== '312sd6f7sdfkjqwe9') {
    ctx.status = 401;
  }

  ctx.body = "success";
  next();
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3243);
