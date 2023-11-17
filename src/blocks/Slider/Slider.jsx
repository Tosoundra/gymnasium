import { arrayOfSliderImage } from '../../assets/constants/arrayOfSliderImage';
import styles from './Slider.module.scss';

export const Slider = ({ arrayOfItems }) => {
  return (
    <section className={styles.slider}>
      {arrayOfItems.map((item, index) => {
        return (
          <img
            className={styles.slider__item}
            key={index}
            src={item}
            alt={`picture ${index}`}
            width={1440}
          />
        );
      })}
    </section>
  );
};
