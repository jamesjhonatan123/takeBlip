import { render, screen } from "@testing-library/react";
import Card, { CardProps } from ".";

describe("Card component", () => {
  const defaultProps: CardProps = {
    visualization: "block",
    name: "Jonatas",
    type: "router",
    isFavorite: true,
    index: 0,
    color: "blue",
    created: String(new Date()),
    handleDetails: jest.fn(),
  };

  it("should render a card component ", () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByTestId("card-id")).toBeDefined();
  });
});
