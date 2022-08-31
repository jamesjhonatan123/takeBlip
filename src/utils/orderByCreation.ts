import { ICards } from "../types/cards.dto";

const orderByCreation = (cards: ICards[]) => {
  const newCards = cards.sort((a, b) => {
    if (a.created === b.created && a.type !== b.type) {
      console.log(a, b);
      return b.type.localeCompare(a.type);
    }
    if (a.created === b.created) {
      console.log(a, b);
      return b.name.localeCompare(a.name);
    }
    console.log(a, b);
    const date1 = new Date(a.created);
    const date2 = new Date(b.created);
    return Number(date1) - Number(date2);
  });
  return newCards;
};

export default orderByCreation;
