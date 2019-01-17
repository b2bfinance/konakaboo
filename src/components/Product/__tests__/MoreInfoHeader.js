import React from 'react';
import { render, mount } from 'enzyme';
import MoreInfoHeader, {
  Wrapper,
  LogoWrapper,
  Logo,
  CloseButton
} from '../MoreInfoHeader';
import IconButton from '@material-ui/core/IconButton';

describe('Wrapper', () => {
  test('renders correctly', () => {
    expect(render(<Wrapper />)).toMatchSnapshot();
  });
});

describe('LogoWrapper', () => {
  test('renders correctly', () => {
    expect(render(<LogoWrapper />)).toMatchSnapshot();
  });
});

describe('Logo', () => {
  test('renders correctly', () => {
    expect(render(<Logo />)).toMatchSnapshot();
  });
});

describe('CloseButton', () => {
  test('renders correctly', () => {
    expect(render(<CloseButton />)).toMatchSnapshot();
  });
});

describe('MoreInfoHeader', () => {
  let Component;
  let wrapper;
  let onClose;

  beforeAll(() => {
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
    wrapper.unmount();
  });

  test('renders correctly', () => {
    expect(render(Component)).toMatchSnapshot();
  });

  test('should call onClose when close triggered', () => {
    wrapper.find(IconButton).simulate('click');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
