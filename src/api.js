let store;

export function setStore(storeObj) {
  store = storeObj;
}

function getProvider() {
  const { config, products } = store.getState();
  return `${config.provider}${products.type}`;
}

const api = {
  getProducts() {
    return fetch(getProvider()).then(res => res.json());
  },

  getProductsWithFilters() {
    const { filters } = store.getState();
    return api.getProducts(`${getProvider()}?query={${filters}}`);
  }
}

export default api;
