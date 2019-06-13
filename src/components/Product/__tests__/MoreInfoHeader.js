import IconButton from '@material-ui/core/IconButton';
import { createMount, createRender } from '@material-ui/core/test-utils';
import React from 'react';
import MoreInfoHeader, {
  CloseButton,
  Logo,
  LogoWrapper,
  Wrapper
} from '../MoreInfoHeader';

describe('Wrapper', () => {
  test('renders correctly', () => {
    const render = createRender();
    expect(render(<Wrapper />)).toMatchSnapshot();
  });
});

describe('LogoWrapper', () => {
  test('renders correctly', () => {
    const render = createRender();
    expect(render(<LogoWrapper />)).toMatchSnapshot();
  });
});

describe('Logo', () => {
  test('renders correctly', () => {
    const render = createRender();
    expect(render(<Logo />)).toMatchSnapshot();
  });
});

describe('CloseButton', () => {
  test('renders correctly', () => {
    const render = createRender();
    expect(render(<CloseButton />)).toMatchSnapshot();
  });
});

describe('MoreInfoHeader', () => {
  let Component;
  let wrapper;
  let onClose;

  beforeAll(() => {
    const mount = createMount();
    const product = stubData.products.item;

    onClose = jest.fn();

    Component = (
      <MoreInfoHeader
        onClose={onClose}
        title={product.title}
        brand={product.brand}
        logo={product.links.logo}
      />
    );

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
    wrapper.find(IconButton).simulate('click');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
