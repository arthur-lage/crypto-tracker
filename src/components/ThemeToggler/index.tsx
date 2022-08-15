import { Moon, Sun } from "phosphor-react";

import styles from "./styles.module.scss";

type Props = {
  darkTheme: boolean;
  toggleTheme: () => void;
};

export function ThemeToggler({ darkTheme, toggleTheme }: Props) {
  return (
    <button className={styles.toggler} onClick={toggleTheme}>
      {darkTheme ? (
        <Moon size={28} color={"#fff"} weight="bold" />
      ) : (
        <Sun size={28} color={"#111"} weight="bold" />
      )}
    </button>
  );
}
