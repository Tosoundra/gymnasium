import logo from '../../assets/images/logo.svg';
import gmnsm from '../../assets/images/gmnsm_icon.svg';
import styles from './PopupFeedback.module.scss';
import { useEffect, useRef } from 'react';

export const PopupFeedback = ({ isPopupWithFeedbackOpen, setIsPopupWithFeedbackOpen }) => {
  const buttonRef = useRef(null);
  useEffect(() => {
    if (isPopupWithFeedbackOpen) {
      buttonRef.current.focus();
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPopupWithFeedbackOpen]);
  return (
    <div
      className={`${styles.popupFeedback} ${
        isPopupWithFeedbackOpen && styles.popupFeedback_active
      }`}>
      <div className={styles.popupFeedback__container}>
        <img src={logo} alt="logo" />
        <div className={styles.popupFeedback__flex}>
          <div>
            <h2 className={styles.popupFeedback__title}>thank you</h2>
            <p className={styles.popupFeedback__text}>
              We received your request successfully <br /> Our team will contact you immediately
            </p>
          </div>
          <img className={styles.popupFeedback__picture} src={gmnsm} alt="icon" />
        </div>

        <button
          ref={buttonRef}
          onClick={() => {
            setIsPopupWithFeedbackOpen(false);
          }}
          className={styles.popupFeedback__button}
          type="button">
          Return home
        </button>
      </div>
    </div>
  );
};
