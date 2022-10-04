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
  proxy:{
    "/dev/api":{
        target:"http://119.45.133.128:8098",
        changOrigin:true,
        pathRewrite:{
            "^/dev/api":""
        }
    }
}
  },
  // 关闭eslint
  lintOnSave: false
});
