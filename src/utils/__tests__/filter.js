import {
  getChosenForGroup,
  getEmptyChosen,
  getQueryStringFromState
} from '../filter';

test('Gets the chosen filter from the specified group', () => {
  expect(getChosenForGroup({ 0: ['CHOSEN'] }, 0)).toEqual(['CHOSEN']);
});

test('Resets all chosen filters', () => {
  const resetChosenFilters = getEmptyChosen([
    { multiChoice: true },
    { multiChoice: false }
  ]);

  expect(resetChosenFilters[0]).toBeInstanceOf(Array);
  expect(resetChosenFilters[0]).toHaveLength(0);
  expect(resetChosenFilters[1]).toBe('');
  expect(resetChosenFilters[1]).toHaveLength(0);
});

test('Creates a query string with no filters', () => {
  expect(getQueryStringFromState(stubData.filters.withNoChosen)).toBe('');
});

test('Creates a query string with a multi choice filter', () => {
  expect(getQueryStringFromState(stubData.filters.withMultiChoiceChosen)).toBe(
    'TEST_KEY=TEST_CHOICE%2CTEST_CHOICE'
  );
});

test('Creates a query string with single choice filter', () => {
  expect(getQueryStringFromState(stubData.filters.withSingleChoiceChosen)).toBe(
    'TEST_KEY=TEST_CHOICE'
  );
});

test('Creates a query string with single and multi choice filters', () => {
  expect(
    getQueryStringFromState(stubData.filters.withSingleAndMultiChoiceChosen)
  ).toBe('TEST_KEY=TEST_CHOICE%2CTEST_CHOICE&TEST_KEY_2=TEST_CHOICE');
});

test('Will not create a query string with multi choice filters that has null values', () => {
  expect(
    getQueryStringFromState(stubData.filters.withNullMultiChoiceChosen)
  ).toBe('');
});

test('Will not create a query string with single choice filters that has null values', () => {
  expect(
    getQueryStringFromState(stubData.filters.withNullSingleChoiceChosen)
  ).toBe('');
});
