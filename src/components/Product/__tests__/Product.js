import React from 'react';
import { shallow, render } from 'enzyme';
import Button from '../../Button';
import Product, {
  Container,
  HeadingRow,
  StyledProductLabels,
  ProductCol,
  MoreInfoRow,
  ApplyButton,
  InfoList,
  HighlightPoint,
  TechnicalPoint,
  ProductLabels,
  ProductColumns,
  ProductHighlightPoints,
  ProductTechnicalPoints
} from '../Product';

test('Container renders correctly', () => {
  expect(render(<Container theme={stubData.theme} />)).toMatchSnapshot();
});

test('HeadingRow renders correctly', () => {
  expect(render(<HeadingRow theme={stubData.theme} />)).toMatchSnapshot();
});

test('StyledProductLabels renders correctly', () => {
  expect(render(<StyledProductLabels />)).toMatchSnapshot();
});

test('ProductCol renders correctly', () => {
  expect(render(<ProductCol theme={stubData.theme} />)).toMatchSnapshot();
});

test('MoreInfoRow renders correctly', () => {
  expect(render(<MoreInfoRow theme={stubData.theme} />)).toMatchSnapshot();
});

test('ApplyButton renders correctly', () => {
  expect(render(<ApplyButton />)).toMatchSnapshot();
});

test('InfoList renders correctly', () => {
  expect(render(<InfoList />)).toMatchSnapshot();
});

test('HighlightPoint renders correctly', () => {
  expect(render(<HighlightPoint theme={stubData.theme} />)).toMatchSnapshot();
});

test('TechnicalPoint renders correctly', () => {
  expect(render(<TechnicalPoint theme={stubData.theme} />)).toMatchSnapshot();
});

test('ProductLabels renders correctly', () => {
  expect(render(<ProductLabels labels={['test']} />)).toMatchSnapshot();
});

test('ProductColumns renders correctly', () => {
  expect(
    render(<ProductColumns columns={[{ label: 'test', value: 'test' }]} />)
  ).toMatchSnapshot();
});

test('ProductHighlightPoints renders correctly', () => {
  expect(
    render(<ProductHighlightPoints points={['test']} />)
  ).toMatchSnapshot();
});

test('ProductTechnicalPoints renders correctly', () => {
  expect(
    render(<ProductTechnicalPoints points={['test']} />)
  ).toMatchSnapshot();
});

test('Product with more information available renders correctly', () => {
  expect(
    shallow(<Product product={stubData.products.withMoreInformation} />)
  ).toMatchSnapshot();
});

test('Product without more information available renders correctly', () => {
  expect(
    shallow(<Product product={stubData.products.withoutMoreInformation} />)
  ).toMatchSnapshot();
});

test('Product with highlighted set renders correctly', () => {
  expect(
    shallow(<Product product={stubData.products.withHighlight} />)
  ).toMatchSnapshot();
});

test('Clicking the apply button displays the confirmation dialog', () => {
  const wrapper = shallow(
    <Product product={stubData.products.withConfirmation} />
  );

  wrapper.find(ApplyButton).simulate('click', { preventDefault() {} });
  expect(wrapper).toMatchSnapshot();
});

test('Clicking the more info button displays more information', () => {
  const wrapper = shallow(
    <Product product={stubData.products.withMoreInformation} />
  );

  wrapper.find(Button).simulate('click');
  expect(wrapper).toMatchSnapshot();
});
