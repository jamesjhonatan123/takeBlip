import { render, screen } from "@testing-library/react";
import Button, { IButtonProps } from ".";

describe("Button component", () => {
  const defaultProps: IButtonProps = {
    children: "button",
    onClick: jest.fn(),
  };
  it("should render the Button component", () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByRole("button")).toBeDefined();
  });
});
