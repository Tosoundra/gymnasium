import { Form } from '../../components/Form/Form';
import styles from './SecondFormComponent.module.scss';
export const SecondFormComponent = ({}) => {
  return (
    <section className={styles.secondFormComponent}>
      <div className={styles.secondFormComponent__blur}></div>
      <span className={styles.secondFormComponent__mission}>MISSION AND GOALS</span>
      <div className={styles.secondFormComponent__container}>
        <div>
          <h3 className={styles.secondFormComponent__title}>
            Empowering <br />
          </h3>
          <p className={styles.secondFormComponent__subtitle}>
            Our role is to enable our children by <br /> empowering them
          </p>
        </div>
        <Form title="Join us now" />
      </div>
    </section>
  );
};
