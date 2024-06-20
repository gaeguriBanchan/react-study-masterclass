import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  // ref : 코드로 특정 Element를 잡을 수 있는 방법
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
          <Box
            drag
            // dragConstraints drag 가능 범위
            dragConstraints={biggerBoxRef}
            // dragSnapToOrigin: drag 종료되면 원위치
            dragSnapToOrigin
            // dragElastic: drag 가능범위를 넘어갈때 탄성 조절, 0~1, 기본은 0.5
            dragElastic={0.5}
            variants={boxVariants}
            whileHover="hover"
            whileTap="tap"
          ></Box>
        </BiggerBox>
      </Wrapper>
    </>
  );
}

export default App;
