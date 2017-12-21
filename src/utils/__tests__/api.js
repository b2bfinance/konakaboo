import getProducts, { makeProviderURI } from '../api';

test('appends filters with a question mark when the provider has no query strings', () => {
  expect(
    makeProviderURI(
      'http://localhost:3000',
      stubData.filters.withSingleChoiceChosen
    )
  ).toBe('http://localhost:3000?TEST_KEY=TEST_CHOICE');
});

test('appends filters with an ampersand when the provider has query strings', () => {
  expect(
    makeProviderURI(
      'http://localhost:3000?query=test',
      stubData.filters.withSingleChoiceChosen
    )
  ).toBe('http://localhost:3000?query=test&TEST_KEY=TEST_CHOICE');
});

test('request product data and gets json response', async () => {
  const respone = await getProducts(
    'http://localhost:3333',
    stubData.filters.withNoChosen
  );

  expect(respone).toBeDefined();
  expect(respone.data).toBeDefined();
  expect(respone.data).toBeInstanceOf(Array);
});
