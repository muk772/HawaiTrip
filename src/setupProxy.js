const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://web-dev.dev.kimo.ai/v1",
      //   target: 'https://prod.api.jumbotail.com',
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
