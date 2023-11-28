import { useContext } from 'react';
import styles from './Button.module.scss';
import { PopupWithFormContext } from '../../App';
export const Button = ({ title }) => {
  const setIsPopupOpen = useContext(PopupWithFormContext);
  return (
    <button
      onClick={() => {
        setIsPopupOpen(true);
      }}
      className={styles.button}>
      {title}
    </button>
  );
};
