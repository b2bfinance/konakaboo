import { getChosenForGroup } from '../filter';

test('Gets the chosen filter from the specified group', () => {
  expect(getChosenForGroup({ 0: ['CHOSEN'] }, 0)).toEqual(['CHOSEN']);
});
