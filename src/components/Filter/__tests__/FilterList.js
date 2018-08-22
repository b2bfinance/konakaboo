import React from 'react';
import { mount, shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import FilterList, {
  FilterRow,
  ChipContainer,
  StyledChip,
  generateChipLabel,
  mapDispatchToProps,
  mapStateToProps
} from '../FilterList';
import { Filter } from '../Filter';
import Chip from '@material-ui/core/Chip';
import Cancel from '@material-ui/icons/Cancel';

test('<FilterRow /> renders correctly', () => {
  expect(shallow(<FilterRow />)).toMatchSnapshot();
});

test('<ChipContainer /> renders correctly', () => {
  expect(shallow(<ChipContainer />)).toMatchSnapshot();
});

describe('<StyledChip />', () => {
  test('with no selection renders correctly', () => {
    expect(shallow(<StyledChip selection={[]} />)).toMatchSnapshot();
  });

  test('with selection renders correctly', () => {
    expect(shallow(<StyledChip selection={['TEST']} />)).toMatchSnapshot();
  });
});

describe('generateChipLabel', () => {
  const choices = [
    { label: 'Chosen Label', value: 'chosen_1' },
    { label: 'Chosen Label', value: 'chosen_2' },
    { label: 'Chosen Label', value: 'chosen_3' }
  ];

  test('creates a none multi label with no chosen', () => {
    expect(generateChipLabel('label', false, '', choices)).toBe('label');
  });

  test('creates a multi label with no chosen', () => {
    expect(generateChipLabel('label', true, [], choices)).toBe('label');
  });

  test('creates a none multi label with chosen', () => {
    expect(generateChipLabel('label', false, 'chosen_1', choices)).toBe(
      'Chosen Label'
    );
  });

  test('creates a multi label with chosen', () => {
    expect(
      generateChipLabel('label', true, ['chosen_1', 'chosen_2'], choices)
    ).toBe('Chosen Label +1');
  });
});

describe('<FilterList />', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    const mockStore = configureMockStore([thunk]);
    const mockState = stubData.filters.withSingleAndMultiChoiceChosen;

    store = mockStore({ config: { provider: '' }, filters: mockState });

    wrapper = mount(
      <Provider store={store}>
        <FilterList />
      </Provider>
    );
  });

  test('has the correct chip labels', () => {
    const chips = wrapper.find(StyledChip);
    expect(chips.first().text()).toBe('TEST_CHOICE_1_LABEL +1');
    expect(chips.last().text()).toBe('TEST_CHOICE_1_LABEL');
  });

  test('will toggle filter visiblilty when clicking associated chip', () => {
    const chip = wrapper.find(StyledChip).first();

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

  test('will dispatch the correct actions when deleting', () => {
    wrapper
      .find(Cancel)
      .first()
      .simulate('click');

    expect(store.getActions()).toEqual([
      { type: 'RESET_GROUP_FILTERS', group: 0, payload: {} },
      { type: 'PRODUCTS_REQUEST' }
    ]);
  });

  test('will close the filter when clicking the associated delete element', () => {
    wrapper
      .find(Chip)
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

  test('will reset filters when reset chip is clicked', () => {
    wrapper
      .find(Chip)
      .last()
      .simulate('click');

    expect(store.getActions()).toEqual([
      { payload: {}, type: 'RESET_FILTERS' },
      { type: 'PRODUCTS_REQUEST' }
    ]);
  });
});

test('mapDispatchToProps maps the dispatch correctly', () => {
  expect(Object.keys(mapDispatchToProps)).toEqual([
    'handleResetFiltersForGroup',
    'handleResetFilters'
  ]);
});

test('mapStateToProps maps the state correctly', () => {
  const stubState = stubData.filters.withSingleAndMultiChoiceChosen;

  expect(mapStateToProps({ filters: stubState })).toEqual({
    chosen: stubState.chosen,
    filters: stubState.available
  });
});
