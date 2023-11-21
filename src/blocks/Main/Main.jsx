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
const titleForZone = ['FUNCTIONAL TRAINING', 'BJJ', 'BOXING'];

export const Main = ({}) => {
  return (
    <main>
      <FirstFormComponent />
      <AdaptiveProgram />
      <ComponentWithMan />
      <Slider arrayOfItems={arrayOfSliderImage} description={titleForKid} />
      <SecondFormComponent />
      <Slider arrayOfItems={arrayOfSliderZones} description={titleForZone} />
      <Package />
      <Review />
      <Mentors />
      <Map />
      <GetMoreInfo />
    </main>
  );
};
