import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer>
      <span className={styles.coinGeckoText}>Using CoinGecko CryptoAPI</span>
      <span className={styles.madeBy}>
        Made with 💜 by <a href="https://github.com/arthur-lage">Arthur Lage</a>
      </span>
    </footer>
  );
}
