export default (provider, filterState) =>
  new Promise((resolve, reject) => {
    resolve({
      json() {
        return stubData.products.response;
      }
    });
  });
