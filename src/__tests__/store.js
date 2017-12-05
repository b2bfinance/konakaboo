import createStore from '../store';

test('Store is created', () => {
  const state = {
    config: 'test',
    theme: 'test',
    filters: 'test',
    products: 'test'
  };

  const store = createStore(state);
  expect(store.getState()).toBe(state);
});