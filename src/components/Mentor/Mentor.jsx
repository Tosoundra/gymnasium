import styles from './Mentor.module.scss';

export const Mentor = ({ mentor }) => {
  return (
    <li className={styles.mentor}>
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
      <img className={styles.mentor__image} src={mentor.img} alt={mentor.name} loading='lazy' />
    </li>
  );
};
