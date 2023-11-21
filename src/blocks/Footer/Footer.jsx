import styles from './Footer.module.scss';
import logo from '../../assets/images/logo.svg';
import phone from '../../assets/images/phone.svg';
import mail from '../../assets/images/mail.svg';

export const Footer = ({}) => {
  return (
    <footer className={styles.footer}>
      <img className={styles.footer__logo} src={logo} alt="logo" />
      <div className={styles.footer__container}>
        <address className={styles.footer__address}>
          Our Locations
          <p>
            1) Mezzanine (M) Floor, <br /> Golden Mile 7, Palm Jumeirah, Dubai
          </p>
          <p>
            2) Second Floor, <br /> Burj Vista, Downtown, Dubai
          </p>
          <a href="https://gmnsm.com/doc/terms_conditions.pdf" className={styles.footer__terms}>
            TERMS AND CONDITIONS
          </a>
          <span className={styles.footer__rights}>All rights reserved</span>
        </address>

        <address className={styles.footer__contacts}>
          Contact info:
          <p className={styles.footer__contact}>
            <img className={styles.footer__icon} src={phone} alt="phone" />
            <a href="tel:+971585905317">+971 58 590 5317</a>
          </p>
          <p className={styles.footer__contact}>
            <img className={styles.footer__icon} src={mail} alt="mail" />
            <a href="mailto:info@gmnsm.com">info@gmnsm.com</a>
          </p>
          <div className={styles['footer__social-media']}>
            <a
              className={styles.footer__link}
              href="https://www.instagram.com/gmnsm"
              target="blank">
              Instagram
            </a>
            <a
              className={styles.footer__link}
              href="https://facebook.com/gymnasium.worldwide"
              target="blank">
              Facebook
            </a>
          </div>
        </address>
      </div>
    </footer>
  );
};
