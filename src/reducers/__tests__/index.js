import reducers from '../';

it('will recieve all reducers', () => {
  expect(Object.keys(reducers)).toEqual([
    'config',
    'theme',
    'filters',
    'products'
  ]);
});
