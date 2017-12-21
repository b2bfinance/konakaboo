import reducer from '../theme';
import defaultState from '../../utils/theme';

it('will return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(defaultState);
});
