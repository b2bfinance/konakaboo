import reducers from '../';

it('Should recieve all reducers', () => {
  expect(Object.keys(reducers)).toEqual([
    'config',
    'theme',
    'filters',
    'products'
  ]);
});
