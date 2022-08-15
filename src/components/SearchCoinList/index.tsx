import { SearchCoin } from "../../interfaces/SearchCoin";
import { SearchCryptoCoin } from "../SearchCryptoCoin";

import styles from "./styles.module.scss";

export function SearchCoinList({ coinList }: { coinList: SearchCoin[] }) {
  return (
    <div className={styles.coinList}>
      {coinList.map((coin) => (
        <SearchCryptoCoin key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
