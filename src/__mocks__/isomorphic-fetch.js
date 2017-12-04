export default (provider, filterState) =>
  new Promise((resolve, reject) => {
    if (provider === 'http://localhost:8000/error') {
      return reject({
        error: true
      });
    }

    resolve({
      json() {
        return stubData.products.response;
      }
    });
  });
