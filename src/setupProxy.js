const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // app.use(
  //   createProxyMiddleware("/Prod/prediction", {
  //     target: "https://ot111o86l5.execute-api.us-east-1.amazonaws.com",
  //     changeOrigin: true,
  //   })
  // );
  app.use(
    createProxyMiddleware("/Prod/detectapi", {
      target: "https://ot111o86l5.execute-api.us-east-1.amazonaws.com",
      changeOrigin: true,
    })
  );
};
