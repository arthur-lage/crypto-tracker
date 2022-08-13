import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CryptoCoin } from "../../components/CryptoCoin";

import { Coin } from "../../interfaces/Coin";

import { api } from "../../services/api";

import { ThemeToggler } from "../../components/ThemeToggler";

import styles from "../../styles/Home.module.scss";

export function Home() {
  const [coinList, setCoinList] = useState<Coin[]>([]);
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    if (!darkTheme == true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    async function fetchData() {
      const res = await api.get("/coins");
      const { data } = res;

      setCoinList(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <header>
        <Link to="/" className={styles.title}>
          Crypto Tracker
        </Link>
        <ThemeToggler darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </header>
      <div className={styles.coinList}>
        {coinList.map((coin) => (
          <CryptoCoin key={coin.id} coin={coin} />
        ))}
      </div>
      <span>Using CoinGecko CryptoAPI</span>
    </div>
  );
}
