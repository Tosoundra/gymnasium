import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import mainPicture from '../../assets/images/main_header_picture.png';
import ellipse from '../../assets/images/Ellipse.png';
import { Button } from '../../components/Button/Button';

export const Header = ({ setIsPopupOpen }) => {
  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src={logo} alt="logo" />
      <div className={styles.header__information}>
        <h1 className={styles.header__title}>
          Gymnasium: <br /> Martial Arts <br /> for Adults and <br /> Children
        </h1>
        <p className={styles.header__subtitle}>Building minds and bodies</p>
        <ul className={styles.header__list}>
          <li className={styles.header__element}>Physical and mental growth for kids</li>
          <li className={styles.header__element}>
            Discpline and strong mindset for kids and adults
          </li>
          <li className={styles.header__element}>
            Master martial arts by the hands of veteran trainers
          </li>
        </ul>
        <div className={styles.header__address}>
          <p>
            Mezzanine (M) Floor, <br /> Golden Mile 7, Palm Jumeirah, Dubai
          </p>
          <p>
            Second Floor, <br /> Burj Vista, Downtown, Dubai
          </p>
        </div>

        <Button title="Start today" setIsPopupOpen={setIsPopupOpen} />
      </div>
      <img className={styles.header__ellipse} src={ellipse} alt="ellipse" />
      <img className={styles.header__picture} src={mainPicture} alt="main picture" />
    </header>
  );
};
