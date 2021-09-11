const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/Prod/molesimage", {
      target: "https://ot111o86l5.execute-api.us-east-1.amazonaws.com",
      changeOrigin: true,
    })
  );
};
