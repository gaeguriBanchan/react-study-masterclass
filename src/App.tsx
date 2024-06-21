import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  width: 100px;
  height: 100px;
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const ontoggleBtn = () => {
    setClicked((prev) => !prev);
  };
  return (
    <>
      <Wrapper onClick={ontoggleBtn}>
        <Box>
          {!clicked ? (
            <Circle
              layoutId="circle"
              style={{ borderRadius: 50 }}
              // transition={{ duration: 3 }}
            />
          ) : null}
        </Box>
        <Box>
          {clicked ? (
            <Circle
              layoutId="circle"
              style={{ borderRadius: 0, scale: 2 }}
              // transition={{ duration: 3 }}
            />
          ) : null}
        </Box>
      </Wrapper>
    </>
  );
}

export default App;
