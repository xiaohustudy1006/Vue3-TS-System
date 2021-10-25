module.exports = {
  publicPath: "./",
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        views: "@/views"
      }
    }
  }
}
