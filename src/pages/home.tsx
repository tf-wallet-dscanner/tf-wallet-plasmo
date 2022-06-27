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
      <div>{bears}</div>
      <button onClick={increasePopulation}>Click!</button>
    </div>
  );
};
