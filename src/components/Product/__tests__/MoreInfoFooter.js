import Button from '@material-ui/core/Button';
import { createMount, createRender } from '@material-ui/core/test-utils';
import React from 'react';
import MoreInfoFooter, { Wrapper } from '../MoreInfoFooter';

describe('Wrapper', () => {
  const render = createRender();

  test('renders correctly', () => {
    expect(render(<Wrapper />)).toMatchSnapshot();
  });
});

describe('MoreInfoFooter', () => {
  let Component;
  let wrapper;
  let onClose;

  beforeAll(() => {
    const mount = createMount();
    const product = stubData.products.item;

    onClose = jest.fn();
    Component = <MoreInfoFooter onClose={onClose} link={product.links.apply} />;
    wrapper = mount(Component);
  });

  afterAll(() => {
    wrapper.cleanUp();
  });

  test('renders correctly', () => {
    const render = createRender();

    expect(render(Component)).toMatchSnapshot();
  });

  test('should call onClose when close triggered', () => {
    wrapper.find(Button).simulate('click');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
