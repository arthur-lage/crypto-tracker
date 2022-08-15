import { Link } from "react-router-dom";
import { SearchCoin } from "../../interfaces/SearchCoin";

import styles from "./styles.module.scss";

export function SearchCryptoCoin({ coin }: { coin: SearchCoin }) {
  return (
    <Link to={`/coins/${coin.id}`} className={styles.cryptoCoin}>
      <div className={styles.coinInformation}>
        <img src={coin.large} alt={coin.name} />
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
        <div className={styles.marketCapRank}>
          <span>Market Cap Rank (USD)</span>
          <span>{coin.market_cap_rank}</span>
        </div>
      </div>
    </Link>
  );
}
