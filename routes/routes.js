const KoaRouter = require('koa-router');

const router = new KoaRouter();
const rword = require('rword');

router.get('/usernames/:id', (ctx) => {
  ctx.body = {
    username: {
      first: rword.generate(ctx.params.id, { capitalize: 'first' }),
      second: rword.generate(ctx.params.id, { capitalize: 'first' }),
    },
  };
});

module.exports = router;
