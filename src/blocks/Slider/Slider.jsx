import { useEffect, useRef, useState } from 'react';
import styles from './Slider.module.scss';

export const Slider = ({ arrayOfItems, description }) => {
  const [imageWidth, setImageWidth] = useState(0);
  const listRef = useRef(null);
  const imageRef = useRef(null);

  const prevButtonClickHandler = () => {
    listRef.current.scrollLeft -= imageWidth;
  };

  const nextButtonClickHandler = () => {
    listRef.current.scrollLeft += imageWidth;
  };

  useEffect(() => {
    const width = imageRef.current.clientWidth;
    setImageWidth(width);
  }, []);

  return (
    <>
      <section className={styles.slider}>
        <button
          onClick={prevButtonClickHandler}
          className={styles.slider__button}
          type="button"></button>
        <ul className={styles.slider__container} ref={listRef}>
          {arrayOfItems.map((item, index) => {
            return (
              <img
                key={index}
                className={styles.slider__picture}
                src={item}
                alt={`picture ${index}`}
                width="100%"
                height="100%"
                ref={imageRef}
              />
            );
          })}
        </ul>
        <button
          onClick={nextButtonClickHandler}
          className={styles.slider__button}
          type="button"></button>
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
