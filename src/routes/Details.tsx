import botPhoto from "../assets/botPhoto.svg";
import ballon from "../assets/ballon.svg";
import activeUsers from "../assets/activeUsers.svg";
import receivedMessages from "../assets/receivedMessages.svg";
import sendedMessages from "../assets/sendedMessages.svg";
import { Button } from "../components/Button";
import styles from "./Details.module.scss";
import { useContext } from "react";
import { ICardsContext } from "../types/cards.dto";
import { CardsContext } from "../context/cards";
import { formatDate, numberFormat } from "../utils";

export default function Details() {
  const { cards, setCards, details, setDetails } =
    useContext<ICardsContext>(CardsContext);

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.photoName}>
          <img src={details?.image ? details.image : botPhoto} />
          <div>
            <strong>{details.name}</strong>
            <span>Id: {details.name}</span>
          </div>
        </div>
        <time>Created at {formatDate(new Date(details.created))}</time>
      </header>
      <hr />
      <div className={styles.content}>
        <div className={styles.gridContent}>
          <div className={`${styles.regionTimezone} ${styles.block}`}>
            <div>
              <span>Region and idiom</span>
              <strong>Brasil - {details.culture}</strong>
            </div>
            <div>
              <span>Timezone</span>
              <strong>(UTC - 03:00) Brasília</strong>
            </div>
          </div>
          <div className={`${styles.activeUsers} ${styles.block}`}>
            <img src={activeUsers} alt="" />
            <div>
              <strong>{numberFormat(details.analytics.user.actived)}</strong>
              <span>Usuários ativos</span>
            </div>
          </div>
          <div className={`${styles.receivedMessages} ${styles.block}`}>
            <img src={receivedMessages} alt="" />
            <div>
              <strong>
                {numberFormat(details.analytics.message.received)}
              </strong>
              <span>Mensagens recebidas</span>
            </div>
          </div>
          <div className={`${styles.sendedMessages} ${styles.block}`}>
            <img src={sendedMessages} alt="" />
            <div>
              <strong>{numberFormat(details.analytics.message.sent)}</strong>
              <span>Mensagens enviadas</span>
            </div>
          </div>
        </div>
        <div className={styles.ballon}>
          <img src={ballon} alt="ballon icon" />
          <div>
            <span>Status account</span>
            <strong>Free</strong>
          </div>
          <Button onClick={() => console.log("oi")}>update account</Button>
        </div>
      </div>
      <hr />
      <footer>
        <span>©2019, BLiP Todos os direitos reservados</span>
        <i />
        <strong>Termos de Uso</strong>
      </footer>
    </div>
  );
}
