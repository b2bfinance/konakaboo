import reducer from '../theme';
import defaultState from '../../utils/theme';

it('Should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(defaultState);
});
