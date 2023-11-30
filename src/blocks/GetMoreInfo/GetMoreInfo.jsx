import { useContext, useState } from 'react';
import styles from './GetMoreInfo.module.scss';
import { PopupFeedbackContext } from '../../App';

export const GetMoreInfo = () => {
  const setIsPopupOpen = useContext(PopupFeedbackContext);

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [mobileValue, setMobileValue] = useState('');
  const [ageValue, setAgeValue] = useState('');

  return (
    <section className={styles.getMoreInfo}>
      <span className={styles.getMoreInfo__subtitle}>GET MORE INFO</span>
      <h3 className={styles.getMoreInfo__title}>
        IF YOU STILL HAVE <br /> QUESTIONS,
      </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsPopupOpen(true);
        }}
        className={styles.form}>
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
        <div></div>
        <button className={styles.form__submit} type="submit">
          Send
        </button>
      </form>
    </section>
  );
};
