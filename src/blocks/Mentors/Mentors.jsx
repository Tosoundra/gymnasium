import styles from './Mentors.module.scss';
import { Mentor } from '../../components/Mentor/Mentor';
import { mentors } from '../../assets/constants/mentors';
import { useEffect, useRef } from 'react';
import { SimpleSlider } from '../../components/Slide/Slide';
import Slider from 'react-slick';
import { useState } from 'react';
import { compileString } from 'sass';

export const Mentors = () => {
  const listRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const prevButtonClickHandler = () => {
    listRef.current.scrollLeft -= cardWidth;
  };

  const nextButtonClickHandler = () => {
    listRef.current.scrollLeft += cardWidth;
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <button onClick={onClick} className={styles.mentors__button} type="button"></button>;
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return <button onClick={onClick} className={styles.mentors__button} type="button"></button>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    slide: 'ul',
    swipe: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: 'slider_custom',
  };

  return (
    <section className={styles.mentors}>
      <div className={styles['mentors__title-container']}>
        <h3 className={styles.mentors__title}>
          THE MAIN CHARACTERISTIC OF MENTORS IS THE COMBINATION OF A SPORTS COACH, A PARENT AND A
          PEER IN ONE PERSON.
        </h3>
        <button
          onClick={prevButtonClickHandler}
          className={styles.mentors__button}
          type="button"></button>
        <button
          onClick={nextButtonClickHandler}
          className={styles.mentors__button}
          type="button"></button>
      </div>

      {/* <Slider {...settings}>
        {mentors.map((item, index) => {
          return <Mentor key={index} mentor={item} />;
        })}
      </Slider> */}

      <ul className={styles.mentors__list} ref={listRef}>
        {mentors.map((item, index) => {
          return <Mentor key={index} mentor={item} setCardWidth={setCardWidth} />;
        })}
      </ul>
    </section>
  );
};
