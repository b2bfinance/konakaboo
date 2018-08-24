import React from 'react';
import { mount, shallow } from 'enzyme';
import List, { Wrapper } from '../List';
import Filter from '../Filter';
import Chip, { BaseChip } from '../Chip';
import Cancel from '@material-ui/icons/Cancel';

test('Wrapper renders correctly', () => {
  expect(shallow(<Wrapper />)).toMatchSnapshot();
});

describe('List', () => {
  let handleResetFiltersForGroup;
  let handleSetChosenForGroup;
  let handleResetFilters;
  let wrapper;

  beforeEach(() => {
    handleResetFiltersForGroup = jest.fn();
    handleSetChosenForGroup = jest.fn();
    handleResetFilters = jest.fn();

    wrapper = mount(
      <List
        filtersChosen={stubData.filters.withSingleAndMultiChoiceChosen.chosen}
        filtersAvailable={
          stubData.filters.withSingleAndMultiChoiceChosen.available
        }
        handleResetFiltersForGroup={handleResetFiltersForGroup}
        handleResetFilters={handleResetFilters}
        handleSetChosenForGroup={handleSetChosenForGroup}
      />
    );
  });

  test('has the correct chip labels', () => {
    const chips = wrapper.find(Chip);
    expect(chips.first().text()).toBe('TEST_CHOICE_1_LABEL +1');
    expect(chips.last().text()).toBe('TEST_CHOICE_1_LABEL');
  });

  test('will toggle filter visiblilty when clicking associated chip', () => {
    const chip = wrapper.find(Chip).first();

    chip.simulate('click');

    expect(
      wrapper
        .find(Filter)
        .first()
        .prop('visible')
    ).toBe(true);

    chip.simulate('click');

    expect(
      wrapper
        .find(Filter)
        .first()
        .prop('visible')
    ).toBe(false);
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
