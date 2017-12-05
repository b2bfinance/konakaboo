import React from 'react';
import { render } from 'enzyme';
import Row from '../Row';

test('Row renders correctly', () => {
  expect(render(<Row />)).toMatchSnapshot();
});
