import { useEffect } from 'react';
import { useRef } from 'react';
import styles from './Mentor.module.scss';

export const Mentor = ({ mentor, setCardWidth }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const width = cardRef.current.clientWidth;
    setCardWidth(width);
  });
  return (
    <li className={styles.mentor} ref={cardRef}>
      <div className={styles.mentor__container}>
        <div>
          <span className={styles.mentor__name}>{mentor.name}</span>
          <ul className={styles.mentor__list}>
            {mentor.awards.map((item, index) => {
              return (
                <li className={styles.mentor__award} key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <img className={styles.mentor__image} src={mentor.img} alt={mentor.name} />
      </div>
    </li>
  );
};
