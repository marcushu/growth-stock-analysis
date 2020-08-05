import React from 'react';
import { render,  cleanup } from '@testing-library/react';
import Question from '../Question';

afterEach(cleanup);

test("renders ok", () => {
  const { asFragment } = render(
    <Question
    description={'test_description'}
    trueValue={1}
    falseValue={-1}
    changeHandler={() => {}}
    selected={'false'} />
  );

  expect(asFragment()).toMatchSnapshot();
});

test('renders the label', () => {
  const { getByText } = render(
    <Question
    description={'test_description'}
    trueValue={1}
    falseValue={-1}
    changeHandler={() => {}}
    selected={'false'} />
  );

    expect(getByText('test_description')).toBeInTheDocument();
})