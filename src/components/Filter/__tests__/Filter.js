import React from 'react';
import { render, shallow } from 'enzyme';
import Filter, { Wrapper, Heading, handleMouseDown } from '../Filter';
import ListItem from '@material-ui/core/ListItem';

describe('Wrapper', () => {
  test('when not visible renders correctly', () => {
    expect(render(<Wrapper />)).toMatchSnapshot();
  });

  test('when visible renders correctly', () => {
    expect(render(<Wrapper visible />)).toMatchSnapshot();
  });
});

describe('Heading', () => {
  test('renders correctly', () => {
    expect(render(<Heading />)).toMatchSnapshot();
  });
});

describe('Filter', () => {
  const stubFilters = stubData.filters.withSingleAndMultiChoiceChosen;
  let filters;
  let props;

  beforeEach(() => {
    filters = {
      single: {
        choices: stubFilters.available[1].choices,
        chosen: stubFilters.chosen[1]
      },
      multi: {
        choices: stubFilters.available[0].choices,
        chosen: stubFilters.chosen[0]
      }
    };

    props = {
      visible: true,
      group: 1,
      title: 'Filter Title',
      handleClose: jest.fn(),
      handleSetChosenForGroup: jest.fn()
    };
  });

  test('with multi choice renders correctly', () => {
    expect(
      shallow(
        <Filter {...Object.assign(props, { multi: true }, filters.multi)} />
      )
    ).toMatchSnapshot();
  });

  test('with single choice renders correctly', () => {
    expect(
      shallow(
        <Filter {...Object.assign(props, { multi: false }, filters.single)} />
      )
    ).toMatchSnapshot();
  });

  test('single ListItem can be toggled', () => {
    const wrapper = shallow(
      <Filter {...Object.assign(props, { multi: false }, filters.single)} />
    );

    wrapper
      .find(ListItem)
      .at(1)
      .simulate('click');

    expect(props.handleSetChosenForGroup.mock.calls[0][1]).toBe(
      'TEST_CHOICE_2'
    );
  });

  test('multi ListItem can be selected', () => {
    const wrapper = shallow(
      <Filter
        {...Object.assign(props, { multi: true }, filters.multi, {
          chosen: []
        })}
      />
    );

    wrapper
      .find(ListItem)
      .at(0)
      .simulate('click');

    expect(props.handleSetChosenForGroup.mock.calls[0][1]).toEqual([
      'TEST_CHOICE_1'
    ]);
  });

  test('multi ListItem can be deselected', () => {
    const wrapper = shallow(
      <Filter {...Object.assign(props, { multi: true }, filters.multi)} />
    );

    wrapper
      .find(ListItem)
      .at(0)
      .simulate('click');

    expect(props.handleSetChosenForGroup.mock.calls[0][1]).toEqual([
      'TEST_CHOICE_2'
    ]);
  });
});

test('will stop the default action', () => {
  const e = {
    preventDefault: jest.fn()
  };

  handleMouseDown(e);

  expect(e.preventDefault).toHaveBeenCalled();
});
