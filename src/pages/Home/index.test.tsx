import { render, screen } from "@testing-library/react";
import Home from ".";
import { CardsContext } from "../../context/cards";

const renderHome = jest.fn(async (children) => {
  const cards = [
    {
      name: "jonatas",
      type: "receiver",
      created: String(new Date()),
      isFavorite: true,
      color: "black",
    },
  ];
  const setCards = jest.fn();
  const setDetails = jest.fn();
  return render(
    <CardsContext.Provider value={{ cards, setCards, setDetails }}>
      {children}
    </CardsContext.Provider>
  );
});

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Home Page", () => {
  it("should render the Home page", async () => {
    await renderHome(<Home />);
    expect(screen.getByTestId("Home-id")).toBeDefined();
  });
});
