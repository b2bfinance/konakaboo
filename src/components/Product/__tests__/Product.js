import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, mount } from 'enzyme';
import Button from '../../Button';
import Product, { Wrapper } from '../Product';
import ApplyButton from '../ApplyButton';
import Confirm from '../Confirm';

describe('Wrapper', () => {
  test('render correctly without highlight', () => {
    expect(
      render(<Wrapper highlight={false} theme={stubData.theme} />)
    ).toMatchSnapshot();
  });

  test('renders correctly with highlight', () => {
    expect(
      render(<Wrapper highlight={true} theme={stubData.theme} />)
    ).toMatchSnapshot();
  });
});

describe('Product', () => {
  const ThemedProduct = ({ theme, product }) => (
    <ThemeProvider theme={theme}>
      <Product product={product} />
    </ThemeProvider>
  );

  test('renders correctly with more information available ', () => {
    expect(
      render(
        <ThemedProduct
          product={stubData.products.withMoreInformation}
          theme={stubData.theme}
        />
      )
    ).toMatchSnapshot();
  });

  test('renders correctly without more information available ', () => {
    expect(
      render(
        <ThemedProduct
          product={stubData.products.withoutMoreInformation}
          theme={stubData.theme}
        />
      )
    ).toMatchSnapshot();
  });

  test('renders correctly with highlighted set', () => {
    expect(
      render(
        <ThemedProduct
          product={stubData.products.withHighlight}
          theme={stubData.theme}
        />
      )
    ).toMatchSnapshot();
  });

  test('clicking the apply button displays the confirmation dialog', () => {
    const wrapper = mount(
      <ThemedProduct
        product={stubData.products.withConfirmation}
        theme={stubData.theme}
      />
    );

    wrapper.find(ApplyButton).simulate('click', {
      preventDefault() {}
    });

    expect(wrapper.find(Confirm).exists()).toBe(true);
  });

  test('clicking the more info button displays more information', () => {
    const wrapper = mount(
      <ThemedProduct
        product={stubData.products.withMoreInformation}
        theme={stubData.theme}
      />
    );

    const moreButton = wrapper
      .find(Button)
      .filterWhere(wrapper => wrapper.text() === 'more info');

    moreButton.simulate('click');

    expect(moreButton.text()).toBe('less info');
  });
});
