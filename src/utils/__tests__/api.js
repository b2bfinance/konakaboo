import getProducts, { makeProviderURI } from '../api';

test('Appends filters with an ampersand when the provider already has query strings', () => {
  expect(
    makeProviderURI(
      'http://localhost:3000?query=test',
      stubData.filters.withSingleChoiceChosen
    )
  ).toBe('http://localhost:3000?query=test&TEST_KEY=TEST_CHOICE');
});

test('Creates a provider with no filters', () => {
  expect(
    makeProviderURI('http://localhost:3000', stubData.filters.withNoChosen)
  ).toBe('http://localhost:3000');
});

test('Creates a provider with a multi choice filter', () => {
  expect(
    makeProviderURI(
      'http://localhost:3000',
      stubData.filters.withMultiChoiceChosen
    )
  ).toBe('http://localhost:3000?TEST_KEY=TEST_CHOICE%2CTEST_CHOICE');
});

test('Creates a provider with single choice filter', () => {
  expect(
    makeProviderURI(
      'http://localhost:3000',
      stubData.filters.withSingleChoiceChosen
    )
  ).toBe('http://localhost:3000?TEST_KEY=TEST_CHOICE');
});

test('Creates a provider with single and multi choice filters', () => {
  expect(
    makeProviderURI(
      'http://localhost:3000',
      stubData.filters.withSingleAndMultiChoiceChosen
    )
  ).toBe(
    'http://localhost:3000?TEST_KEY=TEST_CHOICE%2CTEST_CHOICE&TEST_KEY_2=TEST_CHOICE'
  );
});

test('Request product data and gets json response', async () => {
  const respone = await getProducts(
    'http://localhost:3333',
    stubData.filters.withNoChosen
  );
  expect(respone).toBeDefined();
  expect(respone.data).toBeDefined();
  expect(respone.data).toBeInstanceOf(Array);
});
