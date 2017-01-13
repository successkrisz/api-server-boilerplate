export default router => {
  const api = 'api'
  router.prefix(`/${api}`);
  router.get('/', async function(ctx, next) {
    ctx.body = {message: 'Hello World!'};
  });

  return router;
}
