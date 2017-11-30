import { getChosenForGroup, getEmptyChosen } from '../filter';

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
