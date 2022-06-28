import { NavigateFunction, useNavigate } from 'react-router-dom';

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
      <button onClick={onNextPage}>About</button>
      <button
        className="font-bold pl-5"
        onClick={() => {
          navigation('/hong');
        }}>
        Hong
      </button>
      <div>{bears}</div>
      <button onClick={increasePopulation}>Click!</button>
    </div>
  );
};
