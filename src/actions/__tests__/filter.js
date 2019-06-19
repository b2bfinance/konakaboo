import { setFilters, resetFilters, resetGroupFilters } from '../filter';

it('setFilters creates the correct action object', () => {
  const actionObj = setFilters();

  expect(actionObj).toHaveProperty('type');
  expect(actionObj).toHaveProperty('group');
  expect(actionObj).toHaveProperty('payload');
});

it('resetFilters creates the correct action object', () => {
  const actionObj = resetFilters();

  expect(actionObj).toHaveProperty('type');
  expect(actionObj).toHaveProperty('payload');
});

it('resetGroupFilters creates the correct action object', () => {
  const actionObj = resetGroupFilters();

  expect(actionObj).toHaveProperty('type');
  expect(actionObj).toHaveProperty('group');
  expect(actionObj).toHaveProperty('payload');
});
