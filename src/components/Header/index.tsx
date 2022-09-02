import logo from "../../assets/blipLogo.svg";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header data-testid={"header-id"} className={styles.header}>
      <img src={logo} alt="Logotipo do Blip" />
    </header>
  );
};

export default Header;
