import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  /* flex-direction: column; */
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  /* justify-content: center;
  align-items: center; */
  font-size: 24px;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const ontoggleBtn = () => {
    setClicked((prev) => !prev);
  };
  return (
    <>
      <Wrapper onClick={ontoggleBtn}>
        <Box
          style={{
            justifyContent: clicked ? 'center' : 'start',
            alignItems: clicked ? 'center' : 'start',
          }}
        >
          <Circle layout />
        </Box>
      </Wrapper>
    </>
  );
}

export default App;
