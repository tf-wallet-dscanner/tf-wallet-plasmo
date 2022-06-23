import { NavigateFunction, useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigation: NavigateFunction = useNavigate();

  const onNextPage = (): void => {
    navigation('/about');
  };

  return (
    <div style={{ padding: 16 }}>
      <span>Home page111</span>
      <button onClick={onNextPage}>About</button>
    </div>
  );
};
