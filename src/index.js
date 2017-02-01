import 'babel-polyfill';
import config from 'config';
import _debug from 'debug';
import Koa from 'koa';
import parser from 'koa-bodyparser';
import convert from 'koa-convert';
import logger from 'koa-logger';

import router from './routing';
import connectToDB from './mongoose';

const app = new Koa();
const debug = _debug('app:server');
const isTest = (process.env.NODE_ENV === 'test');

const ctxLogger = async function (ctx, next) {
  debug(ctx);
  return await next();
};

if (config.useDB && !isTest) connectToDB();

app
  .use(convert(logger()))
  .use(convert(parser()));

if (!isTest) app.use(ctxLogger);

app
  .use(router.routes())
  .use(router.allowedMethods());

export default app.listen(config.PORT, () => debug(`Server running at: http://localhost: ${config.PORT}`));
