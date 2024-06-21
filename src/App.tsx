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
  /* flex-direction: column; */
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  position: absolute;
  top: 100px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
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

const box = {
  hidden: (back: boolean) => ({ opacity: 0, x: back ? -500 : 500, scale: 0 }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.3 },
  },
  exit: (back: boolean) => ({
    opacity: 0,
    x: back ? 500 : -500,
    scale: 0,
    transition: { duration: 0.3 },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextBtn = async () => {
    await setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevBtn = async () => {
    await setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <>
      <Wrapper>
        {/* AnimatePresence에 mode="wait" 을 추가하면 exit 끝난뒤 animate 작동 */}
        <AnimatePresence custom={back}>
          <Box
            // custom을 사용해서 값을 전달하면 initial과 exit를 반전가능, custom은 AnimatePresence에도 넣어줘야한다
            custom={back}
            key={visible}
            variants={box}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {visible}
          </Box>
        </AnimatePresence>
        <button onClick={prevBtn}>Prev!</button>
        <button onClick={nextBtn}>Next!</button>
      </Wrapper>
    </>
  );
}

export default App;
