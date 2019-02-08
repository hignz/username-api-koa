const Koa = require('koa');
const json = require('koa-json');

const app = new Koa();
const cors = require('@koa/cors');
const router = require('./routes/routes');

const port = process.env.PORT || 3000;

app
  .use(json())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () => console.log(`Server Started on port ${port}`));
