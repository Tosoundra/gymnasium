import styles from './Slider.module.scss';

export const Slider = ({ arrayOfItems, description }) => {
  return (
    <>
      <section className={styles.slider}>
        <ul className={styles.slider__container}>
          {arrayOfItems.map((item, index) => {
            return (
              <img
                key={index}
                className={styles.slider__picture}
                src={item}
                alt={`picture ${index}`}
                width="100%"
                height="100%"
              />
            );
          })}
        </ul>
      </section>

      <div className={styles['marquee-container']}>
        <div className={`${styles.items} ${styles.marquee}`}>
          {description.map((item, index) => {
            return (
              <span key={index} className={styles['marquee-container__title']}>
                {item}
              </span>
            );
          })}
        </div>
        <div aria-hidden="true" className={`${styles.items} ${styles.marquee}`}>
          {description.map((item, index) => {
            return (
              <span key={index} className={styles['marquee-container__title']}>
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};
