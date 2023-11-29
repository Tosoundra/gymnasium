import styles from './Review.module.scss';
import { arrayOfReviews } from '../../assets/constants/arrayOfReviews';
import rating from '../../assets/images/rating.svg';

export const Review = () => {
  return (
    <section className={styles.review}>
      <h3 className={styles.review__title}>client reviews</h3>
      <ul className={styles.review__list}>
        {arrayOfReviews.map((item, index) => {
          return (
            <li className={styles.review__card} key={index}>
              <div className={styles['review__card-information']}>
                <div className={styles.review__contact}>
                  <div style={{ backgroundColor: item.color }} className={styles.review__avatar}>
                    <span className={styles['review__short-name']}>{item.name[0]}</span>
                  </div>
                  <div>
                    <span className={styles.review__name}>{item.name}</span>
                    <img src={rating} alt="rating" />
                  </div>
                </div>
                <p className={styles.review__text}>{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
