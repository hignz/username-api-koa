const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const rword = require('rword');

const app = new Koa();
const router = new KoaRouter();

const port = process.env.PORT || 3000;

app.use(json());

router.get('/usernames/:id', (ctx) => {
  ctx.body = {
    username: {
      first: rword.generate(ctx.params.id, { capitalize: 'first' }),
      second: rword.generate(ctx.params.id, { capitalize: 'first' }),
    },
  };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => console.log(`Server Started on port ${port}`));
