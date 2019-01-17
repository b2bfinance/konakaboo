import React from 'react';
import { mount } from 'enzyme';
import MoreInfo from '../MoreInfo';
import MoreInfoHeader from '../MoreInfoHeader';
import MoreInfoBody from '../MoreInfoBody';
import MoreInfoFooter from '../MoreInfoFooter';

describe('MoreInfoDrawer', () => {
  let wrapper;
  let onClose;

  beforeAll(() => {
    const product = stubData.products.item;
    onClose = jest.fn();

    wrapper = mount(
      <MoreInfo
        open
        onClose={onClose}
        title={product.title}
        links={product.links}
        brand={product.brand}
        disclaimer={product.disclaimer}
        detailed={product.detailed}
      />
    );
  });

  afterAll(() => {
    wrapper.unmount();
  });

  test('should have required children', () => {
    expect(wrapper.find(MoreInfoHeader).length).toBe(1);
    expect(wrapper.find(MoreInfoBody).length).toBe(1);
    expect(wrapper.find(MoreInfoFooter).length).toBe(1);
  });

  test('should call onClose when close triggered', () => {
    wrapper.simulate('keyDown', { keyCode: 27 });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
