import { Coin } from "../../interfaces/Coin";
import { CryptoCoin } from "../CryptoCoin";

import styles from "./styles.module.scss";

export function CoinList({ coinList }: { coinList: Coin[] }) {
  return (
    <div className={styles.coinList}>
      {coinList.map((coin) => (
        <CryptoCoin key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
