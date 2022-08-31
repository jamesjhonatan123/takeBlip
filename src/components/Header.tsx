import logo from "../assets/blipLogo.svg";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo do Blip" />
    </header>
  );
};
