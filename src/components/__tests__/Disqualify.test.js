import React from 'react';
import { render,  cleanup } from '@testing-library/react';
import Disqualify from '../Disqualify';

afterEach(cleanup);

test("Disqualify renders ok", () => {
  const { asFragment } = render(<Disqualify />);

  expect(asFragment()).toMatchSnapshot();
});
