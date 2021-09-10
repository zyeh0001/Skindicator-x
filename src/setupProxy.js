const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/default/model-test", {
      target: "https://ragtq7f8dd.execute-api.us-east-1.amazonaws.com",
      changeOrigin: true,
    })
  );
};
