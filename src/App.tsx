import { Button } from "./components/Button";
import blocksIcon from "./assets/organize-blocks.svg";
import listIcon from "./assets/organize-list.svg";

import styles from "./App.module.scss";
import "./global.scss";
import { Card } from "./components/Card";
import { useContext, useState } from "react";
import { CardsContext } from "./context/cards";
import { ICards, ICardsContext } from "./types/cards.dto";
import { orderByCreation, orderByName } from "./utils";

function App() {
  const [search, setSearch] = useState("");
  const [visualization, setVisualization] = useState<"block" | "list">("block");
  const { cards, setCards } = useContext<ICardsContext>(CardsContext);
  const handleOrderByCreated = () => {
    const changeCards = orderByCreation(cards);
    setCards([...changeCards]);
  };
  const handleOrderByName = () => {
    const changeCards = orderByName(cards);
    setCards([...changeCards]);
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  let regexSearch = RegExp(search, "gi");
  return (
    <div className="App">
      <div className={styles.container}>
        <div className={styles.header}>
          <span>My Chatbots</span>
          <div className={styles.headerSearch}>
            <input
              value={search}
              onChange={handleChange}
              placeholder="Search"
              type="text"
            />
            <Button onClick={handleOrderByName}>Order By Name</Button>
            <Button onClick={handleOrderByCreated}>Order by creation</Button>
            <img
              onClick={() => setVisualization("block")}
              src={blocksIcon}
              alt="icone de blocos"
            />
            <img
              onClick={() => setVisualization("list")}
              src={listIcon}
              alt="icone de lista"
            />
          </div>
        </div>
        <main>
          <div className={styles.favorites}>
            <span>Favorites</span>
            {cards.every((card: ICards) => card.isFavorite === false) && (
              <p>Nenhum favorito no momento</p>
            )}
            <div className={styles.cards}>
              {cards.map((card: ICards, index: number) =>
                !!search
                  ? card.isFavorite &&
                    card.name.match(regexSearch) && (
                      <Card
                        key={index}
                        index={index}
                        visualization={visualization}
                        name={card.name}
                        type={card.type}
                        isFavorite={card.isFavorite}
                        color={card.color}
                      />
                    )
                  : card.isFavorite && (
                      <Card
                        key={index}
                        index={index}
                        visualization={visualization}
                        name={card.name}
                        type={card.type}
                        isFavorite={card.isFavorite}
                        color={card.color}
                      />
                    )
              )}
            </div>
          </div>
          <hr />
          <div className={styles.cards}>
            {cards.map((card: ICards, index: number) =>
              !!search
                ? !card.isFavorite &&
                  card.name.match(regexSearch) && (
                    <Card
                      key={index}
                      index={index}
                      visualization={visualization}
                      name={card.name}
                      type={card.type}
                      isFavorite={card.isFavorite}
                      color={card.color}
                    />
                  )
                : !card.isFavorite && (
                    <Card
                      key={index}
                      index={index}
                      visualization={visualization}
                      name={card.name}
                      type={card.type}
                      isFavorite={card.isFavorite}
                      color={card.color}
                    />
                  )
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
