import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FiscalFitness from '../FiscalFitness';
import FiscalFitnessState from '../../appState/FiscalFitnessState'

afterEach(cleanup);

test('renders Fiscal Fitness form', () => {
    let ffState = new FiscalFitnessState();

    const { asFragment } = render(
        <FiscalFitness
        submitScore={() => {}}
        fState={ffState} />
    );

    expect(asFragment()).toMatchSnapshot();
});