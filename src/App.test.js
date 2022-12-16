import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Logo", () => {
  render(<App />);
  const linkElement = screen.getByText(/podcaster/i);
  expect(linkElement).toBeInTheDocument();
});
