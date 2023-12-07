import styles from './Map.module.scss';

export const Map = () => {
  return (
    <section className={styles.map}>
      <iframe src="https://snazzymaps.com/embed/552855"></iframe>
    </section>
  );
};
