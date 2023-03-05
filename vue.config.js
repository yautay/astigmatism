module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/colours.scss";
          @import "@/scss/layout.scss";
        `
      }
    }
  }
};
