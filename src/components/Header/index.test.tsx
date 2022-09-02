import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header component", () => {
  it("should render a Header component ", () => {
    render(<Header />);
    expect(screen.getByTestId("header-id")).toBeDefined();
  });
});
