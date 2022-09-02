import { render, screen } from "@testing-library/react";
import Details from ".";
import { CardsContext } from "../../context/cards";

const renderDetails = jest.fn(async (children) => {
  const details = {
    shortName: "jonatas",
    description: "Ola",
    image: "image",
    culture: "culture",
    analytics: {
      user: {
        total: 10,
        actived: 5,
      },
      message: {
        received: 10,
        sent: 5,
      },
    },
    name: "jonatas",
    type: "recep",
    created: String(new Date()),
  };
  return render(
    <CardsContext.Provider value={{ details }}>
      {children}
    </CardsContext.Provider>
  );
});

describe("Details Page", () => {
  it("should render the Details page", async () => {
    await renderDetails(<Details />);
    expect(screen.getByTestId("Details-id")).toBeDefined();
  });
});
