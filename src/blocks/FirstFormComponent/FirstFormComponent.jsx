import { Form } from '../../components/Form/Form';
import styles from './FirstFormComponent.module.scss';

export const FirstFormComponent = ({}) => {
  return (
    <section className={styles.firstFormComponent}>
      <div className={styles.firstFormComponent__container}>
        <h2 className={styles.firstFormComponent__title}>
          TURN <br /> WEAKNESS <br /> INTO <br />
        </h2>
        <Form title="BOOK A TRIAL CLASS" />
      </div>
    </section>
  );
};
