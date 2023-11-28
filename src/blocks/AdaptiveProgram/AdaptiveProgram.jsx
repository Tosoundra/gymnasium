import { useState } from 'react';
import { arrayOfTrainingProgram } from '../../assets/constants/arrayOfTrainingProgram';
import styles from './AdaptiveProgram.module.scss';

export const AdaptiveProgram = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(0);

  const buttonClickHandle = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.adaptive}>
      <div className={styles.adaptive__container}>
        <div className={styles['adaptive__information-container']}>
          <h2 className={styles.adaptive__title}>
            ADAPTIVE PROGRAM <br />
          </h2>
          <nav className={styles.adaptive__navigation}>
            <button
              onClick={() => {
                buttonClickHandle(0);
                setIsActive(0);
              }}
              className={`${styles.adaptive__button} ${
                isActive === 0 && styles.adaptive__button_active
              }`}>
              2-3 years
            </button>
            <button
              onClick={() => {
                buttonClickHandle(1);
                setIsActive(1);
              }}
              className={`${styles.adaptive__button} ${
                isActive === 1 && styles.adaptive__button_active
              }`}>
              4-6 years
            </button>
            <button
              onClick={() => {
                buttonClickHandle(2);
                setIsActive(2);
              }}
              className={`${styles.adaptive__button} ${
                isActive === 2 && styles.adaptive__button_active
              }`}>
              7-9 years
            </button>
            <button
              onClick={() => {
                buttonClickHandle(3);
                setIsActive(3);
              }}
              className={`${styles.adaptive__button} ${
                isActive === 3 && styles.adaptive__button_active
              }`}>
              10-16 years
            </button>
          </nav>
          <ul className={styles.adaptive__list}>
            Let your children form useful habits along with a healthy lifestyle for their everyday
            life:
            {arrayOfTrainingProgram[currentIndex].benefits.map((item, index) => {
              return (
                <li className={styles.adaptive__element} key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
          <button className={styles.adaptive__submit} type="button">
            book a trial class
          </button>
        </div>
        <img
          className={styles.adaptive__picture}
          src={arrayOfTrainingProgram[currentIndex].img}
          alt={`picture_${currentIndex}`}
        />
      </div>
    </section>
  );
};
