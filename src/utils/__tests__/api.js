import getProducts, { makeProviderURI } from '../api';

const filterStates = [
  { chosen: {} },
  {
    chosen: {
      0: ['TEST_CHOICE', 'TEST_CHOICE']
    },
    available: [
      {
        multiChoice: true,
        key: 'TEST_KEY'
      }
    ]
  },
  {
    chosen: {
      0: 'TEST_CHOICE'
    },
    available: [
      {
        multiChoice: false,
        key: 'TEST_KEY'
      }
    ]
  },
  {
    chosen: {
      0: ['TEST_CHOICE', 'TEST_CHOICE'],
      1: 'TEST_CHOICE'
    },
    available: [
      {
        multiChoice: true,
        key: 'TEST_KEY'
      },
      {
        multiChoice: false,
        key: 'TEST_KEY_2'
      }
    ]
  }
];

test('Appends filters with an ampersand when the provider already has query strings', () => {
  expect(
    makeProviderURI('http://localhost:3000?query=test', filterStates[2])
  ).toBe('http://localhost:3000?query=test&TEST_KEY=TEST_CHOICE');
});

test('Creates a provider with no filters', () => {
  expect(makeProviderURI('http://localhost:3000', filterStates[0])).toBe(
    'http://localhost:3000'
  );
});

test('Creates a provider with a multi choice filter', () => {
  expect(makeProviderURI('http://localhost:3000', filterStates[1])).toBe(
    'http://localhost:3000?TEST_KEY=TEST_CHOICE%2CTEST_CHOICE'
  );
});

test('Creates a provider with single choice filter', () => {
  expect(makeProviderURI('http://localhost:3000', filterStates[2])).toBe(
    'http://localhost:3000?TEST_KEY=TEST_CHOICE'
  );
});

test('Creates a provider with single and multi choice filters', () => {
  expect(makeProviderURI('http://localhost:3000', filterStates[3])).toBe(
    'http://localhost:3000?TEST_KEY=TEST_CHOICE%2CTEST_CHOICE&TEST_KEY_2=TEST_CHOICE'
  );
});

test('Request product data and gets json response', async () => {
  const respone = await getProducts('http://localhost:3333', filterStates[1]);
  expect(respone).toBeDefined();
  expect(respone.data).toBeDefined();
  expect(respone.data).toBeInstanceOf(Array);
});
