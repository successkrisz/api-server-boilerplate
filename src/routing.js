import _router from 'koa-router';

const router = _router();
const api = 'api';

router.prefix(`/${api}`);
router.get('/', async function (ctx, next) {
  ctx.body = {message: 'Hello World!'};
});

export default router;
