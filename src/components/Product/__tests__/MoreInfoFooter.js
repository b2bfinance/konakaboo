import React from 'react';
import { render, mount } from 'enzyme';
import MoreInfoFooter, { Wrapper } from '../MoreInfoFooter';
import Button from '@material-ui/core/Button';

describe('Wrapper', () => {
  test('renders correctly', () => {
    expect(render(<Wrapper />)).toMatchSnapshot();
  });
});

describe('MoreInfoFooter', () => {
  let Component;
  let wrapper;
  let onClose;

  beforeAll(() => {
    const product = stubData.products.item;

    onClose = jest.fn();

    Component = <MoreInfoFooter onClose={onClose} link={product.links.apply} />;

    wrapper = mount(Component);
  });

  afterAll(() => {
    wrapper.unmount();
  });

  test('renders correctly', () => {
    expect(render(Component)).toMatchSnapshot();
  });

  test('should call onClose when close triggered', () => {
    wrapper.find(Button).simulate('click');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
