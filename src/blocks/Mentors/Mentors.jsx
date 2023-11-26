import styles from './Mentors.module.scss';
import { Mentor } from '../../components/Mentor/Mentor';
import { mentors } from '../../assets/constants/mentors';
import { useRef } from 'react';
import { useState } from 'react';

export const Mentors = () => {
  const listRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const prevButtonClickHandler = () => {
    listRef.current.scrollLeft -= cardWidth;
  };

  const nextButtonClickHandler = () => {
    listRef.current.scrollLeft += cardWidth;
  };

  return (
    <section className={styles.mentors}>
      <div className={styles['mentors__title-container']}>
        <h3 className={styles.mentors__title}>
          THE MAIN CHARACTERISTIC OF MENTORS IS THE COMBINATION OF A SPORTS COACH, A PARENT AND A
          PEER IN ONE PERSON.
        </h3>
        <button
          onClick={prevButtonClickHandler}
          className={styles.mentors__button}
          type="button"></button>
        <button
          onClick={nextButtonClickHandler}
          className={styles.mentors__button}
          type="button"></button>
      </div>
      <ul className={styles.mentors__list} ref={listRef}>
        {mentors.map((item, index) => {
          return <Mentor key={index} mentor={item} setCardWidth={setCardWidth} />;
        })}
      </ul>
    </section>
  );
};
