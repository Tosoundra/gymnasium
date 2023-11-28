import { useContext } from 'react';
import styles from './Form.module.scss';
import { PopupFeedbackContext, PopupWithFormContext } from '../../App';

export const Form = ({ title }) => {
  const setIsPopupWithFeedbackOpen = useContext(PopupFeedbackContext);
  const setIsPopupOpen = useContext(PopupWithFormContext);

  return (
    <div className={styles.form}>
      <form className={styles.form__container}>
        <h1 className={styles.form__title}>{title}</h1>
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
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsPopupOpen(false);
            setIsPopupWithFeedbackOpen(true);
          }}
          className={styles.form__submit}
          type="submit">
          Book Now
        </button>
      </form>
    </div>
  );
};
