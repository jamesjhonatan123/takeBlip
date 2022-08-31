import * as React from "react";
import { HttpApiService } from "../services/HttpApi.service";
import { ICards } from "../types/cards.dto";
import { generateColor } from "../utils";

export const CardsContext = React.createContext<any>([]);

const CardsProvider: any = ({ children }: any) => {
  const [cards, setCards] = React.useState<ICards[]>([]);

  React.useEffect(() => {
    const formatedCards: ICards[] = [];
    HttpApiService.Get("/bots").then((response) => {
      response.data.forEach((data: ICards) => {
        data.isFavorite = false;
        data.color = generateColor();
        formatedCards.push(data);
      });
      setCards(formatedCards);
    });
  }, []);
  return (
    <CardsContext.Provider
      value={{
        cards,
        setCards,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
