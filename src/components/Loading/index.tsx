import styles from "./styles.module.scss";

export function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loading}></div>
    </div>
  );
}
