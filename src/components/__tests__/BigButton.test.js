import React from 'react';
import { render, cleanup } from '@testing-library/react';
import BigButton from '../BigButton';

afterEach(cleanup);

describe("Big Button", () => {
 it("renders ok", () => {
    const { asFragment } = render(<BigButton
      caption="Quick Pre-qualify"
      image={"thumbsUp"}
      altTxt={"Quick Pre-qualify"}
      selectedState={false}
      selectedHandler={() => { }} />);

    expect(asFragment()).toMatchSnapshot();
  });

 it("renders with class set to UnSelected", () => {
    const { container } = render(<BigButton />);

    expect(container.innerHTML.includes("UnSelected")).toBeTruthy();
  });
});
