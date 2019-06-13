import { createMount } from '@material-ui/core/test-utils';
import React from 'react';
import MoreInfo from '../MoreInfo';
import MoreInfoBody from '../MoreInfoBody';
import MoreInfoFooter from '../MoreInfoFooter';
import MoreInfoHeader from '../MoreInfoHeader';

describe('MoreInfoDrawer', () => {
  let mount;
  let wrapper;
  let onClose;

  beforeAll(() => {
    const product = stubData.products.item;
    mount = createMount();
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
    mount.cleanUp();
  });

  test('should have required children', () => {
    expect(wrapper.find(MoreInfoHeader).length).toBe(1);
    expect(wrapper.find(MoreInfoBody).length).toBe(1);
    expect(wrapper.find(MoreInfoFooter).length).toBe(1);
  });
});
