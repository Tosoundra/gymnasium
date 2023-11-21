import { packages } from '../../assets/constants/package';
import styles from './Package.module.scss';

export const Package = ({}) => {
  return (
    <section className={styles.package}>
      <h3 className={styles.package__title}>CHECK OUT OUR PACKAGES BELOW</h3>
      <ul className={styles.package__container}>
        {packages.map((item, index) => {
          return (
            <li className={styles.package__card} key={index}>
              <div className={styles['package__picture-container']}>
                <img className={styles.package__picture} src={item.img} alt={`picture ${index}`} />
              </div>
              <div className={styles['package__description-container']}>
                <div className={styles['package__title-container']}>
                  <span className={styles['package__card-title']}>{item.title}</span>
                  <span className={styles['package__card-age']}>{item.age}</span>
                </div>
                <span className={styles['package__card-description']}>{item.description}</span>
                <button className={styles.package__submit} type="button">
                  get started
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
