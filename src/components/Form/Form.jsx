import { useContext } from 'react';
import styles from './Form.module.scss';
import { PopupFeedbackContext, PopupWithFormContext } from '../../App';

export const Form = ({ title }) => {
  const setIsPopupWithFeedbackOpen = useContext(PopupFeedbackContext);
  const setIsPopupOpen = useContext(PopupWithFormContext);

  const collectAndSendDataForm = (e) => {
    const form = e.target;
    const data = new FormData(form);

    // Enter here correct server address
    fetch('http://test/', {
      method: form.method,
      headers: { 'Content-Type': 'multipart/form-data' },
      body: data,
    });
  };

  return (
    <div className={styles.form}>
      <form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
          collectAndSendDataForm(e);
          setIsPopupOpen(false);
          setIsPopupWithFeedbackOpen(true);
        }}
        className={styles.form__container}>
        <h1 className={styles.form__title}>{title}</h1>
        <input
          className={styles.form__input}
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          required
          minLength={2}
          maxLength={30}
          pattern="^[A-Za-zа-яА-Я\s]+$"
          title="Any symbols and digits are not allowed"
        />
        <input
          className={styles.form__input}
          type="email"
          placeholder="E-mail"
          name="email"
          id="email"
          required
        />
        <input
          className={styles.form__input}
          type="tel"
          placeholder="Mobile number"
          name="mobile"
          id="mobile"
          maxLength={13}
          required
          pattern="^(971|0)?(50|51|52|55|56|58|2|3|4|6|7|9)\d{7}$"
          title={`971501234567, 0501234567 type phone number.`}
        />
        <input
          className={styles.form__input}
          type="number"
          placeholder="Age"
          name="age"
          id="age"
          min={0}
          max={100}
          required
        />
        <select
          className={styles.form__input}
          placeholder="Preferred Location"
          name="location"
          id="location"
          required>
          <option value="Palm Jumeirah">Palm Jumeirah</option>
          <option value="Downtown">Downtown</option>
          <option value="JBR">JBR</option>
        </select>
        <button className={styles.form__submit} type="submit">
          Book Now
        </button>
      </form>
    </div>
  );
};
