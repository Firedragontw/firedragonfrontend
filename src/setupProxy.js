const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3002/api', // 確保這裡的端口號與後端伺服器一致
      changeOrigin: true,
    })
  );
};