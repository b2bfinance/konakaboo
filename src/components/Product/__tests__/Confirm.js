import React from 'react';
import { shallow, render } from 'enzyme';
import Confirm, {
  handleConfirmClick,
  ConfirmButtonCol,
  ConfirmDialog
} from '../Confirm';

test('Confirm renders correctly', () => {
  const {
    heading,
    description
  } = stubData.products.withConfirmation.meta.confirm;

  expect(
    shallow(<Confirm title={heading} description={description} />)
  ).toMatchSnapshot();
});

test('ConfirmButtonCol renders correctly', () => {
  expect(render(<ConfirmButtonCol />)).toMatchSnapshot();
});

test('ConfirmDialog renders correctly', () => {
  expect(shallow(<ConfirmDialog />)).toMatchSnapshot();
});

test('Confirm click handler sets the window location correctly', () => {
  expect(window.location.href).toBe(undefined);
  handleConfirmClick('http://test.com');
  expect(window.location.href).toBe('http://test.com');
});
