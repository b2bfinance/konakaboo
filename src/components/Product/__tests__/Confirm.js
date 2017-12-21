import React from 'react';
import { shallow, render } from 'enzyme';
import Button from '../../Button';
import Confirm, {
  handleConfirmClick,
  ConfirmButtonCol,
  ConfirmDialog
} from '../Confirm';

test('<Confirm /> renders correctly', () => {
  const {
    heading,
    description
  } = stubData.products.withConfirmation.meta.confirm;

  expect(
    shallow(<Confirm title={heading} description={description} />)
  ).toMatchSnapshot();
});

test('<ConfirmButtonCol /> renders correctly', () => {
  expect(render(<ConfirmButtonCol />)).toMatchSnapshot();
});

test('<ConfirmDialog /> renders correctly', () => {
  expect(shallow(<ConfirmDialog />)).toMatchSnapshot();
});
