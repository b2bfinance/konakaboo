let store;

export function setStore(storeObj) {
  store = storeObj;
}

function formatFilters(filters) {

}

function getProvider() {
  const { config, filters } = store.getState();

  if (filters.selectedCount > 0) {
    return `${config.provider}?query=${formatFilters(filters)}`;
  }

  return config.provider;
}

const api = {
  async getProducts(filters) {
    const products = await fetch(getProvider());
    return products.json();
  },
}

export default api;
