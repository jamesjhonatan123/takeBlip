import blocksIconSelected from "../../assets/organizeBlocks.svg";
import listIconUnselected from "../../assets/organizeList.svg";
import blocksIconUnselected from "../../assets/organizeBlocksSelected.svg";
import listIconSelected from "../../assets/organizeListSelected.svg";
import styles from "./styles.module.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICards, ICardsContext } from "../../types/cards.dto";
import { CardsContext } from "../../context/cards";
import { orderByCreation, orderByName } from "../../utils";
import { HttpApiService } from "../../services/HttpApi.service";
import { Button, Card } from "../../components";

function Home() {
  const [search, setSearch] = useState("");
  const [visualization, setVisualization] = useState<"block" | "list">("block");
  const { cards, setCards, setDetails } =
    useContext<ICardsContext>(CardsContext);
  let navigate = useNavigate();
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

  const handleDetails = async (name: string) => {
    let nameFormated = name;
    if (name.includes(" ")) {
      nameFormated = name.split(" ").join("_");
    }
    await HttpApiService.GetDetails(nameFormated.toLowerCase()).then(
      (response) => {
        setDetails(response.data);
        navigate("details");
      }
    );
  };
  const selectedIconBlockList = () => {
    switch (visualization) {
      case "block":
        return (
          <>
            <img
              onClick={() => setVisualization("block")}
              src={blocksIconSelected}
              alt="icone de blocos selecionado"
            />
            <img
              onClick={() => setVisualization("list")}
              src={listIconUnselected}
              alt="icone de lista"
            />
          </>
        );
      case "list":
        return (
          <>
            <img
              onClick={() => setVisualization("block")}
              src={blocksIconUnselected}
              alt="icone de blocos"
            />
            <img
              onClick={() => setVisualization("list")}
              src={listIconSelected}
              alt="icone de lista selecionado"
            />
          </>
        );
      default:
        break;
    }
  };

  let regexSearch = RegExp(search, "gi");
  return (
    <div data-testid={"Home-id"} className="App">
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
            {selectedIconBlockList()}
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
                        created={card.created}
                        handleDetails={handleDetails}
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
                        created={card.created}
                        handleDetails={handleDetails}
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
                      created={card.created}
                      handleDetails={handleDetails}
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
                      created={card.created}
                      handleDetails={handleDetails}
                    />
                  )
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
