import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Questionaire from '../Questionaire';
import growthState from '../../appState/growthState';

afterEach(cleanup);

test('renders Questionaire', () => {
    const { asFragment } = render(
        <Questionaire
            submitScore={ () => {} }
            selectedValues={growthState} />
    );

    expect(asFragment()).toMatchSnapshot();
});