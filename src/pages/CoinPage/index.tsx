import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { Coin } from "../../interfaces/Coin";
import { api } from "../../services/api";

export function CoinPage() {
  const [coin, setCoin] = useState<Coin | null>(null);
  const [loading, setLoading] = useState(true);

  const { query } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get("/coins/" + query);
        setCoin(res.data);

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

      {loading ? (
        <Loading />
      ) : (
        <>
          {coin && (
            <main>
              <div className="coinInformation">
                <p>{coin.id}</p>
                <h1>{coin.name}</h1>
                <p>{coin.symbol}</p>
                <img src={coin.image.large} alt={coin.name} />
              </div>

              <div className="marketInformation">
                <p>Rank: {coin.market_data.market_cap_rank}</p>
                <p>Price (USD): ${coin.market_data.current_price.usd}</p>
                <p>Market Cap (USD): ${coin.market_data.market_cap.usd}</p>
                <p>Volume (USD): ${coin.market_data.total_volume.usd}</p>
              </div>
            </main>
          )}
        </>
      )}

      <Footer />
    </div>
  );
}
