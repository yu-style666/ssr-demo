const path = require("path");
const withCSS = require("@zeit/next-css");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

module.exports = withCSS({
  // 设置自定义构建目录
  distDir: "build",
  // serverRuntimeConfig 属性只在服务器端可用
  serverRuntimeConfig: {},
  // publicRuntimeConfig 属性在服务端和客户端可用
  publicRuntimeConfig: {},
  // 配置构建 ID
  generateBuildId: async () => {
    return "v1";
  },
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(process.cwd(), "src"),
    };
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      })
    );
    return config;
  },
});
