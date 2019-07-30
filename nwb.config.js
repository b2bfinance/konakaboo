module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "ProductEmbed",
      entry: "./src/umdWrapper.js"
    }
  }
};
