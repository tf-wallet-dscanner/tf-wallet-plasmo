import { NavigateFunction, useNavigate } from 'react-router-dom';

import Button from '~components/atoms/button';
import { THEME_COLOR } from '~constants/colors';
import { useCounterStore } from '~store';

export const Home = () => {
  const navigation: NavigateFunction = useNavigate();
  const { bears, increasePopulation } = useCounterStore((state) => ({
    bears: state.bears,
    increasePopulation: state.increasePopulation,
  }));

  const onNextPage = (): void => {
    navigation('/about');
  };

  return (
    <div style={{ padding: 16 }}>
      <span>Home page111</span>
      <Button onClick={onNextPage}>About</Button>
      <Button
        color={THEME_COLOR.ERROR}
        className="font-bold pl-5"
        onClick={() => {
          navigation('/hong');
        }}>
        Hong
      </Button>
      <div>{bears}</div>
      <Button color={THEME_COLOR.WARNING} onClick={increasePopulation}>
        Click!
      </Button>
    </div>
  );
};
