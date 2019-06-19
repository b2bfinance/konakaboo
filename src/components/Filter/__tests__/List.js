import { createMount, createRender } from '@material-ui/core/test-utils';
import Cancel from '@material-ui/icons/Cancel';
import React, { useReducer } from 'react';
import Chip, { BaseChip } from '../Chip';
import Filter from '../Filter';
import List, { Wrapper } from '../List';
import filtersReducer from '../../../reducers/filters';

test('Wrapper renders correctly', () => {
  const render = createRender();
  expect(render(<Wrapper />)).toMatchSnapshot();
});

describe('List', () => {
  let mount;
  let wrapper;

  beforeEach(() => {
    mount = createMount();

    const FiltersList = () => {
      const [reducedFilters, dispatchFilters] = useReducer(
        filtersReducer,
        stubData.filters.withSingleAndMultiChoiceChosen
      );

      return <List filters={reducedFilters} dispatch={dispatchFilters} />;
    };

    wrapper = mount(<FiltersList />);
  });

  afterEach(() => {
    mount.cleanUp();
  });

  test('has the correct chip labels', () => {
    const chips = wrapper.find(Chip);
    expect(chips.first().text()).toBe('TEST_CHOICE_1_LABEL +1');
    expect(chips.last().text()).toBe('TEST_CHOICE_1_LABEL');
  });

  test('will show filter when clicking associated chip', () => {
    const chip = wrapper.find(Chip).first();

    chip.simulate('click');

    expect(
      wrapper
        .find(Filter)
        .first()
        .prop('visible')
    ).toBe(true);

    chip.simulate('click');
  });

  test('will close the filter when clicking the associated delete element', () => {
    wrapper
      .find(BaseChip)
      .first()
      .simulate('click');

    wrapper
      .find(Cancel)
      .first()
      .simulate('click');

    expect(
      wrapper
        .find(Filter)
        .first()
        .prop('visible')
    ).toBe(false);
  });
});
