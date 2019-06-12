import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, mount } from 'enzyme';
import Drawer from '@material-ui/core/Drawer';
import MoreInfoButton from '../MoreInfoButton';
import Product, { Wrapper } from '../Product';
import ApplyButton from '../ApplyButton';
import Confirm from '../Confirm';

describe('Wrapper', () => {
  test('render correctly without fade', () => {
    expect(
      render(<Wrapper faded={false} theme={stubData.theme} />)
    ).toMatchSnapshot();
  });

  test('renders correctly with fade', () => {
    expect(
      render(<Wrapper faded={true} theme={stubData.theme} />)
    ).toMatchSnapshot();
  });
});

describe('Product', () => {
  const ThemedProduct = ({ theme, product }) => (
    <ThemeProvider theme={theme}>
      <Product {...product} />
    </ThemeProvider>
  );

  test('renders correctly', () => {
    expect(
      render(
        <ThemedProduct
          product={stubData.products.item}
          theme={stubData.theme}
        />
      )
    ).toMatchSnapshot();
  });

  test('clicking the apply button displays the confirmation dialog', () => {
    const wrapper = mount(
      <ThemedProduct product={stubData.products.item} theme={stubData.theme} />
    );

    wrapper.find(ApplyButton).simulate('click', {
      preventDefault() {}
    });

    expect(wrapper.find(Confirm).exists()).toBe(true);
  });

  test('clicking the more info button displays more information', () => {
    const wrapper = mount(
      <ThemedProduct product={stubData.products.item} theme={stubData.theme} />
    );

    const moreButton = wrapper.find(MoreInfoButton);

    moreButton.simulate('click');

    expect(wrapper.find(Drawer).props().open).toBe(true);
  });
});
