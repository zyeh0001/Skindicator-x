const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/default/model-test", {
      target: "https://qur0qdu5dd.execute-api.ap-southeast-2.amazonaws.com",
      changeOrigin: true,
    })
  );
};
