import { Link } from "react-router-dom";
import { Coin } from "../../interfaces/Coin";

import styles from "./styles.module.scss";

export function CryptoCoin({ coin }: { coin: Coin }) {
  return (
    <Link to={`/coins/${coin.id}`} className={styles.cryptoCoin}>
      <div className={styles.coinInformation}>
        <img src={coin.image.small} alt={coin.name} />
        <div className={styles.id}>
          <span>Id</span>
          <span>{coin.id}</span>
        </div>
        <div className={styles.name}>
          <span>Name</span>
          <span>{coin.name}</span>
        </div>
        <div className={styles.symbol}>
          <span>Symbol</span>
          <span>{coin.symbol}</span>
        </div>
        <div className={styles.price}>
          <span>Price (USD)</span>
          <span>${Number(coin.market_data.current_price.usd).toFixed(2)}</span>
        </div>
        <div className={styles.marketCap}>
          <span>Market Cap (USD)</span>
          <span>${Number(coin.market_data.market_cap.usd).toFixed(2)}</span>
        </div>
        <div className={styles.marketCapRank}>
          <span>Market Cap Rank (USD)</span>
          <span>{coin.market_data.market_cap_rank}</span>
        </div>
        <div className={styles.priceChange24h}>
          <span>Price Change 24H (USD)</span>
          <span>${coin.market_data.price_change_24h}</span>
        </div>
      </div>
    </Link>
  );
}
