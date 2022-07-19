const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
  console.log(ctx.request);
});

app.listen(3243);
