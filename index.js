const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
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

  ctx.set('X-My-Custom-Header', '123abc');

  ctx.cookies.set('X-My-Custom-Cookie', 'valueOfCookie');

  console.log(ctx.request);
});

app.listen(3243);
