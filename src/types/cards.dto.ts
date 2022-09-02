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
  details: ICardsDetails;
  setDetails: (object: ICardsDetails) => void;
}

export interface ICardsDetails {
  shortName: string;
  description: string;
  image: string;
  culture: string;
  analytics: {
    user: {
      total: number;
      actived: number;
    };
    message: {
      received: number;
      sent: number;
    };
  };
  name: string;
  type: string;
  created: string;
}

export interface ICardsDetailsState {
  details: ICardsDetails;
  setDetails: (object: ICardsDetails) => void;
}
