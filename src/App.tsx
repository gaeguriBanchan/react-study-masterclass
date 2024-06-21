import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from 'framer-motion';

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  top: 100px;
  position: absolute;
`;

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

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  // path의 프로퍼티를 여기 작성가능
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

const svg = {
  hidden: {
    // 내부채우기
    fill: 'rgba(255,255,255,0)',
    // 라인 채우기
    pathLength: 0,
  },
  visible: {
    fill: 'rgba(255,255,255,1)',
    pathLength: 1,
    // 여기 작성하면 모든값에 동일하게 default값으로 들어가고 세부 수정불가
    // transition: { duration: 1.5 },
  },
};

const boxVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, rotateZ: 360 },
  exit: { opacity: 0, scale: 0, y: 20 },
};

function App() {
  const [showing, setShowing] = useState(false);
  const toggleShowing = () => {
    setShowing((prev) => !prev);
  };
  return (
    <>
      <Wrapper>
        <button onClick={toggleShowing}>Click!</button>
        <AnimatePresence>
          {showing ? (
            <Box
              variants={boxVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default App;
