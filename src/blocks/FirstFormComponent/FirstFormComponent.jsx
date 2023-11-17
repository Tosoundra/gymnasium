import { Form } from '../../components/Form/Form';
import styles from './FirstFormComponent.module.scss';

export const FirstFormComponent = ({}) => {
  return (
    <section className={styles.firstFormComponent}>
      <h2 className={styles.firstFormComponent__title}>
        TURN <br /> WEAKNESS <br /> INTO <br />
      </h2>
      <Form title="BOOK A TRIAL CLASS" />
    </section>
  );
};
