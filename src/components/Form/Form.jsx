import { useContext, useEffect, useRef, useState } from 'react';
import styles from './Form.module.scss';
import { PopupFeedbackContext, PopupWithFormContext } from '../../App';

export const Form = ({ title }) => {
  const setIsPopupWithFeedbackOpen = useContext(PopupFeedbackContext);
  const setIsPopupOpen = useContext(PopupWithFormContext);

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [mobileValue, setMobileValue] = useState('');
  const [ageValue, setAgeValue] = useState('');

  const inputRef = useRef(null);
  useEffect(() => {});
  return (
    <div className={styles.form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsPopupOpen(false);
          setIsPopupWithFeedbackOpen(true);
        }}
        className={styles.form__container}>
        <h1 className={styles.form__title}>{title}</h1>
        <input
          className={styles.form__input}
          value={nameValue}
          onChange={(e) => {
            setNameValue(e.target.value);
          }}
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          required
          minLength={2}
          maxLength={30}
          pattern="^[A-Za-zа-яА-Я\s]+$"
          title="Any symbols and digits are not permitted"
          ref={inputRef}
        />
        <input
          className={styles.form__input}
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
          type="email"
          placeholder="E-mail"
          name="email"
          id="email"
          required
        />
        <input
          className={styles.form__input}
          value={mobileValue}
          onChange={(e) => {
            setMobileValue(e.target.value);
          }}
          type="tel"
          placeholder="Mobile number"
          name="mobile"
          id="mobile"
          maxLength={13}
          required
          pattern="^(971|0)?(50|51|52|55|56|58|2|3|4|6|7|9)\d{7}$"
          title={`971501234567, 0501234567, 025555555, 045678912 are permitted`}
        />
        <input
          className={styles.form__input}
          value={ageValue}
          onChange={(e) => {
            setAgeValue(e.target.value);
          }}
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
          <option value="palmJumeirah">Palm Jumeirah</option>
          <option value="downtown">Downtown</option>
        </select>
        <button className={styles.form__submit} type="submit">
          Book Now
        </button>
      </form>
    </div>
  );
};
