import reducer from '../config';

it('Should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({});
});
