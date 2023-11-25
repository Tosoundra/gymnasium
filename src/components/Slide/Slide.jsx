import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Mentor } from '../../components/Mentor/Mentor';
import { mentors } from '../../assets/constants/mentors';
import styl from '../../blocks/Mentors/Mentors.module.scss';

export const SimpleSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <button onClick={onClick} className={styl.mentors__button} type="button"></button>;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    console.log(onClick)
    return <button onClick={onClick} className={styl.mentors__button} type="button"></button>;
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
    <Slider {...settings}>
      {mentors.map((item, index) => {
        return <Mentor key={index} mentor={item} />;
      })}
    </Slider>
  );
};
