import { useEffect } from 'react';
import { Form } from '../Form/Form';
import styles from './PopupWithForm.module.scss';

export const PopupWithForm = ({ isOpen, setIsPopupOpen }) => {
  const closePopupOnEscapeButtonPress = (e) => {
    if (e.key === 'Escape') {
      setIsPopupOpen(false);
    }
  };

  const closePopupOnOutsideClick = (e) => {
    if (e.target.id === 'popup') {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closePopupOnEscapeButtonPress);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.removeEventListener('keydown', closePopupOnEscapeButtonPress);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div
      onClick={closePopupOnOutsideClick}
      id="popup"
      className={`${styles.popup} ${isOpen && styles.popup_active}`}>
      <div className={styles.popup__container}>
        <Form title="BOOK A TRIAL CLASS" setIsPopupOpen={setIsPopupOpen} />
      </div>
    </div>
  );
};
