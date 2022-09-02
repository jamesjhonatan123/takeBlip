import styles from "./styles.module.scss";

export type IButtonProps = {
  children: string;
  onClick?: () => void;
};

const Button: any = ({ children, onClick, ...props }: IButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
