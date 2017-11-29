import response from '../../../stubs/products/response.json';

export default (provider, filterState) =>
  new Promise((resolve, reject) => {
    resolve({
      json() {
        return response;
      }
    });
  });
