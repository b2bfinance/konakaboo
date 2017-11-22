export default async (provider, filters) => {
  const products = await fetch(provider);

  return products.json();
};
