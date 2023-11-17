import { Button } from '../../components/Button/Button';
import styles from './ComponentWithMan.module.scss';

export const ComponentWithMan = ({}) => {
  return (
    <>
      <section className={styles['title-container']}>
        <h3 className={styles['title-container__title']}>
          turn the pain <br />
          into
        </h3>
      </section>
      <section className={styles.componentWithMan}>
        <h3 className={styles.componentWithMan__title}>Martial Arts for adults</h3>
        <p className={styles.componentWithMan__subtitle}>Unleash your inner warrior</p>
        <ul className={styles.componentWithMan__list}>
          Master martial arts with the best trainers:
          <li className={styles.componentWithMan__element}>BJJ</li>
          <li className={styles.componentWithMan__element}>Grappling</li>
          <li className={styles.componentWithMan__element}>Boxing</li>
        </ul>
        <Button title="Book trail session" />
      </section>
    </>
  );
};
