import React from "react";
import { render } from "@testing-library/react";
import Index from "./Index";

it("should take a snapshot", () => {
  const { asFragment } = render(<Index />);

  expect(asFragment(<Index />)).toMatchSnapshot();
});
