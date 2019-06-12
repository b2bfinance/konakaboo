import React from 'react';
import { render } from 'enzyme';
import Label from '../Label';

describe('<Label />', () => {
  test('renders correctly with default label', () => {
    expect(render(<Label label="Label" />)).toMatchSnapshot();
  });

  test('renders correctly with colored label', () => {
    expect(render(<Label label="#red Label" />)).toMatchSnapshot();
  });

  test('renders correctly with an unsupported color label', () => {
    expect(render(<Label label="#rose Label" />)).toMatchSnapshot();
  });

  test('renders correctly with red color label', () => {
    expect(render(<Label label="#red Label" />)).toMatchSnapshot();
  });

  test('renders correctly with blue color label', () => {
    expect(render(<Label label="#blue Label" />)).toMatchSnapshot();
  });

  test('renders correctly with blueGrey color label', () => {
    expect(render(<Label label="#blueGrey Label" />)).toMatchSnapshot();
  });

  test('renders correctly with yellow color label', () => {
    expect(render(<Label label="#yellow Label" />)).toMatchSnapshot();
  });

  test('renders correctly with orange color label', () => {
    expect(render(<Label label="#orange Label" />)).toMatchSnapshot();
  });

  test('renders correctly with teal color label', () => {
    expect(render(<Label label="#teal Label" />)).toMatchSnapshot();
  });
});
