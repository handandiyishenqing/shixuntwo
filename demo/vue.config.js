const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    // 设置端口号
    port: 5555,
    // 设置主机名
    host: "Localhost",
    // 是否开启https
    https: false,
    // 启动项目时是否自动打开浏览器
    open: true,
  //   Proxy: {
  //       [process.env.VUE_APP_BASE_API]:{
  //         //跨域的地址
  //         target:process.env.VUE_APP_SERVICE_URL,
  //         //是否开启跨域
  //         changeOrigin:true,
  //         //重命名
  //         pathRewrite:{
  //           ["^" + process.env.VUE_APP_BASE_API]:""
  //         }
  //       }
  //   },
  },
  // 关闭eslint
  lintOnSave: false
});
