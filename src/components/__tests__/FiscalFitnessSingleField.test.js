import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import FiscalFitnessSingleField from '../FiscalFitnessSingleField';

afterEach(cleanup);

describe("Fiscal fitness single field", () => {
 it('correctly renders label', () => {
    const { getByText } = render(
      <FiscalFitnessSingleField
        title="test_title"
        scoresId="test_scoresId"
        val={0}
        updateField={() => { }} />
    );

    expect(getByText('test_title')).toBeInTheDocument();
  });

 it('renders', () => {
    const { asFragment } = render(
      <FiscalFitnessSingleField
        title="test_title"
        scoresId="test_scoresId"
        val={0}
        updateField={() => { }} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

 it("calls update function when input changed", () => {
    const tstFunc = jest.fn();

    const { getByDisplayValue } = render(
      <FiscalFitnessSingleField
        title="test_title"
        scoresId="test_scoresId"
        val={0}
        updateField={tstFunc} />
    );

    fireEvent.change(getByDisplayValue("0"), { target: { value: 1 } });
    
    expect(tstFunc).toHaveBeenCalled();
  })
})



