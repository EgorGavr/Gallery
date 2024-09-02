const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/directus',
    createProxyMiddleware({
      target: 'http://localhost:8055', 
      changeOrigin: true,
      pathRewrite: {
        '^/directus': '', 
      },
    })
  );
};
