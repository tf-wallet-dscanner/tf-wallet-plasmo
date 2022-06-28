import Alert from '~components/atoms/alert/alert';
import Box from '~components/atoms/box';

export const Hong = () => {
  return (
    <div style={{ padding: 16 }}>
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
