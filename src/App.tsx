import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  tap: { scale: 1, borderRadius: '100px' },
};

const BiggerBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  /* overflow: hidden; */
`;

function App() {
  // motion의 위치
  const x = useMotionValue(0);
  // motion 위치의 값을 원하는 값으로 변경
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  return (
    <>
      <Wrapper>
        <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
      </Wrapper>
    </>
  );
}

export default App;
