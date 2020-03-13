import React from "react";
import { render } from "@testing-library/react";
import Carousel from "./Index";
import "@testing-library/jest-dom/extend-expect";

test("Check for Title", () => {
  const { getByText } = render(<Carousel />);
  const getTitle = getByText("Carousel Test");
  expect(getTitle).toBeInTheDocument();
});

test("Check for Next Button", () => {
  const { getByText } = render(<Carousel />);
  const getTitle = getByText("Next");
  expect(getTitle).toBeInTheDocument();
});

test("Check for Prev Button", () => {
  const { getByText } = render(<Carousel />);
  const getTitle = getByText("Prev");
  expect(getTitle).toBeInTheDocument();
});
