import starIcon from "../assets/starIcon.svg";
import starFilledIcon from "../assets/starFilledIcon.svg";
import styles from "./Card.module.scss";
import { useContext } from "react";
import { CardsContext } from "../context/cards";
import { generateColor } from "../utils";

interface CardProps {
  visualization: "block" | "list";
  name: string;
  type: string;
  isFavorite?: boolean;
  index: number;
  color: string;
}

export const Card = ({
  visualization,
  name,
  type,
  isFavorite,
  index,
  color,
}: CardProps) => {
  const { cards, setCards } = useContext(CardsContext);
  const handleFavorite = () => {
    const changeCards = [...cards];
    changeCards[index].isFavorite = !isFavorite;
    setCards(changeCards);
  };
  return (
    <div
      className={`${styles.post} 
    ${visualization === "block" ? styles.block : styles.list}`}
    >
      {isFavorite ? (
        <img
          src={starFilledIcon}
          alt="Icone de favorito"
          onClick={() => handleFavorite()}
        />
      ) : (
        <img
          src={starIcon}
          alt="Icone de favorito"
          onClick={() => handleFavorite()}
        />
      )}
      <div>
        <i style={{ backgroundColor: color }} />
        <strong>{name}</strong>
        <span>{type}</span>
      </div>
    </div>
  );
};
