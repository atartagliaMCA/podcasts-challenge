import { render, screen } from "@testing-library/react";
import { Search } from "./Search";

test("renders button", () => {
  render(<Search />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("renders placeHolder", () => {
  render(<Search />);
  const placeHolderEl = screen.getByPlaceholderText("Search Podcast...");
  expect(placeHolderEl).toBeInTheDocument();
});
