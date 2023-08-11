import React from 'react';

const StackInfo = ({
  setStackInfoToggle,
  selectStack,
}: {
  setStackInfoToggle: React.Dispatch<React.SetStateAction<boolean>>;
  selectStack: string;
}) => {
  return (
    <div className='content-wrap stack-info'>
      <button onClick={() => setStackInfoToggle(false)}>닫기</button>
      <p>{selectStack}</p>
    </div>
  );
};

export default StackInfo;
