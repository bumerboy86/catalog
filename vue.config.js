const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: `/catalog`,
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
})
