import React from 'react';
import { render, shallow } from 'enzyme';
import {
  Filter,
  FilterWrapper,
  FilterFormControl,
  FilterSelect,
  FilterMenuItem,
  mapDispatchToProps,
  mapStateToProps
} from '../Filter';

test('FilterWrapper renders correctly', () => {
  expect(render(<FilterWrapper />)).toMatchSnapshot();
});

test('FilterFormControl renders correctly', () => {
  expect(shallow(<FilterFormControl />)).toMatchSnapshot();
});

test('FilterSelect renders correctly', () => {
  expect(
    shallow(
      <FilterSelect
        theme={{ filterHeaderBorder: stubData.theme.filterHeaderBorder }}
      />
    )
  ).toMatchSnapshot();
});

test('FilterMenuItem renders correctly', () => {
  expect(
    shallow(
      <FilterMenuItem
        selected
        theme={{
          filterChosenBackground: stubData.theme.filterChosenBackground,
          filterChosenColor: stubData.theme.filterChosenColor
        }}
      />
    )
  ).toMatchSnapshot();
});

test('Filter renders correctly', () => {
  const { chosen, available } = stubData.filters.withSingleAndMultiChoiceChosen;

  expect(
    shallow(<Filter chosen={chosen} filters={available} />)
  ).toMatchSnapshot();
});

test('mapDispatchToProps maps the dispatch correctly', () => {
  expect(Object.keys(mapDispatchToProps)).toEqual(['handleSelectChange']);
});

test('mapStateToProps maps the state correctly', () => {
  const stubState = stubData.filters.withSingleAndMultiChoiceChosen;

  expect(mapStateToProps({ filters: stubState })).toEqual({
    chosen: stubState.chosen,
    filters: stubState.available
  });
});
