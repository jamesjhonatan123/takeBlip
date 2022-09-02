import starIcon from "../../assets/starIcon.svg";
import starFilledIcon from "../../assets/starFilledIcon.svg";
import styles from "./styles.module.scss";
import { useContext } from "react";
import { CardsContext } from "../../context/cards";
import { formatDate } from "../../utils";

export type CardProps = {
  visualization: "block" | "list";
  name: string;
  type: string;
  isFavorite?: boolean;
  index: number;
  color: string;
  created: string;
  handleDetails: any;
};

const Card = ({
  visualization,
  name,
  type,
  isFavorite,
  index,
  color,
  created,
  handleDetails,
}: CardProps) => {
  const { cards, setCards } = useContext(CardsContext);
  const handleFavorite = () => {
    const changeCards = [...cards];
    changeCards[index].isFavorite = !isFavorite;
    setCards(changeCards);
  };
  const date = new Date(created);
  return (
    <div
      data-testid={"card-id"}
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
      <div
        onClick={() => {
          handleDetails(name);
        }}
        className={styles.content}
      >
        <div>
          <div className={styles.header}>
            <i style={{ backgroundColor: color }} />
            <strong>{name}</strong>
          </div>
          {visualization === "block" && <span>{type}</span>}
          {visualization === "list" && (
            <time>Created at {formatDate(date)}</time>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
