import React from 'react';
import { shallow, render } from 'enzyme';
import Confirm, { Wrapper, ConfirmButtonCol } from '../Confirm';

describe('Confirm', () => {
  const { heading, description } = stubData.products.item.meta.confirm;

  test('renders correctly', () => {
    expect(
      shallow(
        <Confirm
          title={heading}
          description={description}
          handleRequestClose={jest.fn()}
        />
      )
    ).toMatchSnapshot();
  });
});

describe('Wrapper', () => {
  test('renders correctly', () => {
    expect(shallow(<Wrapper />)).toMatchSnapshot();
  });
});

describe('ConfirmButtonCol', () => {
  test('renders correctly', () => {
    expect(render(<ConfirmButtonCol />)).toMatchSnapshot();
  });
});
