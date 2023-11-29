import { useContext } from 'react';
import styles from './GetMoreInfo.module.scss';
import { PopupFeedbackContext } from '../../App';

export const GetMoreInfo = () => {
  const setIsPopupOpen = useContext(PopupFeedbackContext);
  return (
    <section className={styles.getMoreInfo}>
      <span className={styles.getMoreInfo__subtitle}>GET MORE INFO</span>
      <h3 className={styles.getMoreInfo__title}>
        IF YOU STILL HAVE <br /> QUESTIONS,
      </h3>
      <form className={styles.form}>
        <input
          className={styles.form__input}
          type="text"
          placeholder="Name"
          name="name"
          id="name"
        />
        <input
          className={styles.form__input}
          type="email"
          placeholder="E-mail"
          name="email"
          id="email"
        />
        <input
          className={styles.form__input}
          type="tel"
          placeholder="Mobile number"
          name="mobile"
          id="mobile"
        />
        <input className={styles.form__input} type="number" placeholder="Age" name="age" id="age" />
        <select
          className={styles.form__input}
          placeholder="Preferred Location"
          name="location"
          id="location">
          <option value="palmJumeirah">Palm Jumeirah</option>
          <option value="downtown">Downtown</option>
        </select>
        <div></div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsPopupOpen(true);
          }}
          className={styles.form__submit}
          type="submit">
          Send
        </button>
      </form>
    </section>
  );
};
