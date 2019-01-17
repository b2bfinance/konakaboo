import React from 'react';
import { render } from 'enzyme';
import MoreInfoBody, {
  Wrapper,
  Disclaimer,
  DetailRow,
  DetailCell
} from '../MoreInfoBody';

describe('Wrapper', () => {
  test('renders correctly', () => {
    expect(render(<Wrapper />)).toMatchSnapshot();
  });
});

describe('Disclaimer', () => {
  test('renders correctly', () => {
    expect(render(<Disclaimer />)).toMatchSnapshot();
  });
});

describe('DetailRow', () => {
  test('renders correctly', () => {
    expect(render(<DetailRow />)).toMatchSnapshot();
  });
});

describe('DetailCell', () => {
  test('renders correctly', () => {
    expect(render(<DetailCell />)).toMatchSnapshot();
  });
});

describe('MoreInfoBody', () => {
  test('renders correctly', () => {
    const product = stubData.products.item;
    expect(
      render(
        <MoreInfoBody
          detailed={product.detailed}
          disclaimer={product.disclaimer}
        />
      )
    ).toMatchSnapshot();
  });
});
