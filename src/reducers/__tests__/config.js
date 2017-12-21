import reducer from '../config';

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({});
});
