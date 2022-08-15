import { useState } from "react";
import { useParams } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { SearchCoinList } from "../../components/SearchCoinList";

import { SearchCoin } from "../../interfaces/SearchCoin";

import { api } from "../../services/api";

export function SearchPage() {
  const [coinList, setCoinList] = useState<SearchCoin[]>([]);
  const [loading, setLoading] = useState(true);

  const { query } = useParams();

  useState(() => {
    async function fetchData() {
      try {
        const res = await api.get("/search?query=" + query);
        const { data } = res;

        console.log(data);

        setCoinList(data.coins);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    fetchData();
  });

  return (
    <div>
      <Header />

      {loading ? <Loading /> : <SearchCoinList coinList={coinList} />}

      <Footer />
    </div>
  );
}
