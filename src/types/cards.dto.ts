export interface ICards {
  name: string;
  type: string;
  created: string;
  isFavorite?: boolean;
  color: string;
}

export interface ICardsContext {
  cards: ICards[];
  setCards: (value: any) => void;
}
