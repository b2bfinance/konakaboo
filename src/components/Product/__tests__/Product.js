import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
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
  expect(renderer.create(<Container />)).toMatchSnapshot();
});

test('HeadingRow renders correctly', () => {
  expect(renderer.create(<HeadingRow />)).toMatchSnapshot();
});

test('StyledProductLabels renders correctly', () => {
  expect(renderer.create(<StyledProductLabels />)).toMatchSnapshot();
});

test('ProductCol renders correctly', () => {
  expect(renderer.create(<ProductCol />)).toMatchSnapshot();
});

test('MoreInfoRow renders correctly', () => {
  expect(renderer.create(<MoreInfoRow />)).toMatchSnapshot();
});

test('ApplyButton renders correctly', () => {
  expect(renderer.create(<ApplyButton />)).toMatchSnapshot();
});

test('InfoList renders correctly', () => {
  expect(renderer.create(<InfoList />)).toMatchSnapshot();
});

test('HighlightPoint renders correctly', () => {
  expect(renderer.create(<HighlightPoint />)).toMatchSnapshot();
});

test('TechnicalPoint renders correctly', () => {
  expect(renderer.create(<TechnicalPoint />)).toMatchSnapshot();
});

test('ProductLabels renders correctly', () => {
  expect(
    renderer.create(<ProductLabels labels={['test']} />)
  ).toMatchSnapshot();
});

test('ProductColumns renders correctly', () => {
  expect(
    renderer.create(
      <ProductColumns columns={[{ label: 'test', value: 'test' }]} />
    )
  ).toMatchSnapshot();
});

test('ProductHighlightPoints renders correctly', () => {
  expect(
    renderer.create(<ProductHighlightPoints points={['test']} />)
  ).toMatchSnapshot();
});

test('ProductTechnicalPoints renders correctly', () => {
  expect(
    renderer.create(<ProductTechnicalPoints points={['test']} />)
  ).toMatchSnapshot();
});

test('Product renders correctly with more information available', () => {
  expect(
    shallow(<Product product={stubData.products.withMoreInformation} />)
  ).toMatchSnapshot();
});

test('Product renders correctly without more information available', () => {
  expect(
    shallow(<Product product={stubData.products.withoutMoreInformation} />)
  ).toMatchSnapshot();
});
