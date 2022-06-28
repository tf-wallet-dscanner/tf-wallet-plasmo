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
      <button
        className="font-bold pl-5"
        onClick={() => {
          navigation('/hong');
        }}>
        Hong
      </button>
    </div>
  );
};
