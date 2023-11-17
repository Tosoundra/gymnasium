import { arrayOfSliderImage } from '../../assets/constants/arrayOfSliderImage';
import { AdaptiveProgram } from '../AdaptiveProgram/AdaptiveProgram';
import { ComponentWithMan } from '../ComponentWithMan/ComponentWithMan';
import { FirstFormComponent } from '../FirstFormComponent/FirstFormComponent';
import { Slider } from '../Slider/Slider';

export const Main = ({}) => {
  return (
    <main>
      <FirstFormComponent />
      <AdaptiveProgram />
      <ComponentWithMan />
      <Slider arrayOfItems={arrayOfSliderImage} />
    </main>
  );
};
