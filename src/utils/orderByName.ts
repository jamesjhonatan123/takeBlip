import { ICards } from "../types/cards.dto";

const orderByName = (cards: ICards[]) => {
  const newCards = cards.sort((a, b) => a.name.localeCompare(b.name));
  return newCards;
};

export default orderByName;
