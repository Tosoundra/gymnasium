import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg';
import mainPicture from '../../assets/images/backgroundPicture.png';
import { Button } from '../../components/Button/Button';

export const Header = ({}) => {
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
        <address className={styles.header__address}>
          <li>
            Mezzanine (M) Floor, <br /> Golden Mile 7, Palm Jumeirah, Dubai
          </li>
          <li>
            Second Floor, <br /> Burj Vista, Downtown, Dubai
          </li>
          <li>Rimal 3, JBR, Dubai</li>
          <ol></ol>
        </address>

        <Button title="Start today" />
      </div>

      <img className={styles.header__picture} src={mainPicture} alt="main picture" />
    </header>
  );
};
