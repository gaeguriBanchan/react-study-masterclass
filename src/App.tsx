import React, { useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
  flex-direction: column;
`;

const Box = styled(motion.div)`
  height: 300px;
  width: 500px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const Grid = styled.div`
  /* width: 60vw; */
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 20px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const SwitchBtn = styled(motion.button)`
  width: 80px;
  height: 40px;
  border-radius: 10px;
  position: absolute;
  bottom: 50px;
  font-size: 20px;
`;

const Circle = styled(motion.div)`
  background-color: #ffffff;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

function App() {
  const [id, setId] = useState<null | string>(null);
  const [btnClicked, setBtnClicked] = useState(false);
  const onBtnClick = () => {
    setBtnClicked((prev) => !prev);
  };
  return (
    <>
      <Wrapper>
        <Grid>
          <Box
            onClick={() => setId('1')}
            whileHover={{
              x: -(500 * 0.05),
              y: -(300 * 0.05),
              scaleX: 1.1,
              scaleY: 1.1,
            }}
            layoutId="1"
          ></Box>
          <Box>{!btnClicked ? <Circle layoutId="circle" /> : null}</Box>
          <Box>{btnClicked ? <Circle layoutId="circle" /> : null}</Box>
          <Box
            onClick={() => setId('4')}
            whileHover={{
              x: 500 * 0.05,
              y: 300 * 0.05,
              scaleX: 1.1,
              scaleY: 1.1,
            }}
            layoutId="4"
          ></Box>
        </Grid>
        <AnimatePresence>
          {id ? (
            <Overlay
              onClick={() => setId(null)}
              initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
              animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            >
              <Box
                layoutId={id}
                style={{
                  width: 500,
                  height: 300,
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                }}
              />
            </Overlay>
          ) : null}
        </AnimatePresence>
        <AnimatePresence>
          {btnClicked ? (
            <SwitchBtn
              layoutId="switchBtn"
              style={{ color: '#e3671f' }}
              initial={{ scale: 1 }}
              animate={{ scale: 1.5 }}
              onClick={onBtnClick}
            >
              Switch
            </SwitchBtn>
          ) : (
            <SwitchBtn
              layoutId="switchBtn"
              style={{ color: '#2947dc' }}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              onClick={onBtnClick}
            >
              Switch
            </SwitchBtn>
          )}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default App;
