const Koa = require('koa');
const Router = require('@koa/router');

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

router.post('/reflect', (ctx, next) => {
  ctx.body = ctx.request;
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


router.post('/robots-1890', (ctx, next) => {
  ctx.cookies.set('my-cookie-1', '312sd6f7sdfkjqwe9');
  ctx.cookies.set('my-cookie-2', 'sadasqdas');
  ctx.cookies.set('my-cookie-3', 'dffgghdgdfgsdfg');

  ctx.set('my-header-1', 'dsdadfasdfasdf');
  ctx.set('my-header-2', 'fdfhgfhjfhxcfghhd');
  ctx.body = {
    msg1: "Hello World",
    msg2: "Hello World",
    msg3: "Hello World",
    msg4: "Hello World",
    msg4: {
      test: {
        test: {
          message: "Hello World",
          message2: "Hello World2",
          message3: "Hello World3",
        },
      },
    },
    msg5: [1, 4, "asdas", 2345],
  };
  next();
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3243);
