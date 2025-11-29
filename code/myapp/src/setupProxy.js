const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ajax', // /api/list /api/detail /api/center /api/cart
    createProxyMiddleware({
      target: 'https://i.maoyan.com/ajax',
      changeOrigin: true
    })
  );

  // app.use(
  //   '/ajax2', // /api/list /api/detail /api/center /api/cart
  //   createProxyMiddleware({
  //     target: 'https://i.maoyan.com',
  //     changeOrigin: true,
  //   })
  // );

  // app.use(
  //   '/ajax3', // /api/list /api/detail /api/center /api/cart
  //   createProxyMiddleware({
  //     target: 'https://i.maoyan.com',
  //     changeOrigin: true,
  //   })
  // );
};
// https://i.maoyan.com/ajax/comingList?ci=30&limit=10&movieIds=&token=&optimus_uuid=D26C98A041F511EFA5397B0397EF94128EEA1CAFE1B64FFC8708374667C37CE6&optimus_risk_level=71&optimus_code=10