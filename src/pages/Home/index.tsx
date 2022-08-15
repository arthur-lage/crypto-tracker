import React, { useEffect, useState } from "react";

import { Coin } from "../../interfaces/Coin";

import { api } from "../../services/api";

import styles from "./styles.module.scss";

import { CryptoCoin } from "../../components/CryptoCoin";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";
import { CoinList } from "../../components/CoinList";

export function Home() {
  const [coinList, setCoinList] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get("/coins");
        const { data } = res;

        setCoinList(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header />

      {loading ? <Loading /> : <CoinList coinList={coinList} />}

      <Footer />
    </div>
  );
}
