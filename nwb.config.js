module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "ProductsEmbed",
      entry: "./src/umdWrapper.js",
    },
  },
};
