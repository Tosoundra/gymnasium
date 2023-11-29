import styles from './Main.module.scss'

import { arrayOfSliderImage } from '../../assets/constants/arrayOfSliderImage';
import { arrayOfSliderZones } from '../../assets/constants/arrayOfSliderZones';
import { AdaptiveProgram } from '../AdaptiveProgram/AdaptiveProgram';
import { ComponentWithMan } from '../ComponentWithMan/ComponentWithMan';
import { FirstFormComponent } from '../FirstFormComponent/FirstFormComponent';
import { GetMoreInfo } from '../GetMoreInfo/GetMoreInfo';
import { Map } from '../Map/Map';
import { Mentors } from '../Mentors/Mentors';
import { Package } from '../Package/Package';
import { Review } from '../Review/Review';
import { SecondFormComponent } from '../SecondFormComponent/SecondFormComponent';
import { Slider } from '../Slider/Slider';

const titleForKid = ['world champion', 'world champion'];
const titleForZone = [
  'FUNCTIONAL TRAINING',
  <>&#124;</>,
  'BJJ',
  <>&#124;</>,
  'BOXING',
  <>&#124;</>,
];

export const Main = ({}) => {
  return (
    <main>
      <FirstFormComponent />
      <AdaptiveProgram />
      <ComponentWithMan />
      <Slider arrayOfItems={arrayOfSliderImage} description={titleForKid} />
      <SecondFormComponent />
      <Slider arrayOfItems={arrayOfSliderZones} description={titleForZone} />
      <div className={styles.main}>
        <Package />
        <Review />
        <Mentors />
      </div>
      <Map />
      <GetMoreInfo />
    </main>
  );
};
