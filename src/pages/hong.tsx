import { useCallback, useState } from 'react';
import { FaEye, FaEyeSlash, FaSearch } from 'react-icons/fa';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import Alert from '~components/atoms/alert/alert';
import Box from '~components/atoms/box';
import TextField from '~components/atoms/text-field';

export const Hong = () => {
  const navigation: NavigateFunction = useNavigate();

  const onNextPage = (): void => {
    navigation('/');
  };

  const [searchText, setSearchText] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordHide, setPasswordHide] = useState<Boolean>(false);

  const togglePasswordHide = useCallback(() => {
    setPasswordHide(!passwordHide);
  }, [passwordHide]);

  return (
    <div style={{ padding: 16 }}>
      <button onClick={onNextPage}>Home</button>

      <TextField
        placeholder="검색어 입력"
        model={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        prefixIcon={<FaSearch />}
      />

      <TextField
        password={!passwordHide}
        placeholder="비밀번호 입력"
        model={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        suffixIcon={
          passwordHide ? (
            <FaEyeSlash onClick={togglePasswordHide} />
          ) : (
            <FaEye onClick={togglePasswordHide} />
          )
        }
      />

      <Box className="w-[100] h-[100] bg-rose-300">박스테스트</Box>
      <Box className="flex flex-row bg-cyan-300 text-center">
        <Box className="flex-auto">박스1</Box>
        <Box className="flex-auto">박스2</Box>
      </Box>

      <Alert
        severity="error"
        title="Error"
        contents="This is an error alert — check it out!"
      />

      <Alert
        severity="warning"
        contents="This is a warning alert — check it out!"
      />

      <Alert
        severity="info"
        title="Info"
        contents={
          <div>
            This is an info alert —{' '}
            <span className="font-bold">check it out!</span>
          </div>
        }
      />

      <Alert
        severity="success"
        title="Success"
        contents="This is a success alert — check it out!"
      />
    </div>
  );
};
