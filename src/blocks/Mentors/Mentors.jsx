import styles from './Mentors.module.scss';
import { Mentor } from '../../components/Mentor/Mentor';
import { mentors } from '../../assets/constants/mentors';
import { useRef } from 'react';

export const Mentors = () => {
  // const listRef = useRef(null);

  return (
    <section className={styles.mentors}>
      <div className={styles['mentors__title-container']}>
        <h3 className={styles.mentors__title}>
          THE MAIN CHARACTERISTIC OF MENTORS IS THE COMBINATION OF A SPORTS COACH, A PARENT AND A
          PEER IN ONE PERSON.
        </h3>
        <button className={styles.mentors__button} type="button"></button>
        <button className={styles.mentors__button} type="button"></button>
      </div>
      <ul className={styles.mentors__list}>
        {mentors.map((item, index) => {
          return <Mentor key={index} mentor={item} />;
        })}
      </ul>
    </section>
  );
};
