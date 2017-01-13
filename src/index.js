import "babel-polyfill";
import koa from 'koa';
//import mongoose from 'mongoose';
import middleware from 'koa-router';
import logger from 'koa-logger';
import parser from 'koa-bodyparser';
import config from 'config';
import routing from './routing';

// uncomment below to connect to mongodb server
/*
if (process.env.NODE_ENV != 'test') {
// Mongoose init
const options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
};
mongoose.Promise = global.Promise;
mongoose.connect(config.DBHost, options);
mongoose.connection.on('error', console.error);
}
*/

// Apply routes to the router.
const router = routing(middleware());
const app = new koa();

app
  .use(logger())
  .use(parser())
  .use(async function(ctx, next) {
    console.log(ctx);
    return await next();
  })
  .use(router.routes())
  .use(router.allowedMethods())

export default app.listen(config.PORT, () => console.log("Server running at: http://localhost:" + config.PORT));
