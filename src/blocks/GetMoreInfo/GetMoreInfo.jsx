import { useContext, useState } from 'react';
import styles from './GetMoreInfo.module.scss';
import { PopupFeedbackContext } from '../../App';

export const GetMoreInfo = () => {
  const setIsPopupOpen = useContext(PopupFeedbackContext);

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
    <section className={styles.getMoreInfo}>
      <span className={styles.getMoreInfo__subtitle}>GET MORE INFO</span>
      <h3 className={styles.getMoreInfo__title}>
        IF YOU STILL HAVE <br /> QUESTIONS,
      </h3>
      <form
      method='POST'
        onSubmit={(e) => {
          e.preventDefault();
          collectAndSendDataForm(e)
          setIsPopupOpen(true);
        }}
        className={styles.form}>
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
        <div></div>
        <button className={styles.form__submit} type="submit">
          Send
        </button>
      </form>
    </section>
  );
};
