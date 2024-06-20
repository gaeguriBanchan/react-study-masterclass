import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 300vh;
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
  const rotate = useTransform(x, [-800, 800], [-360, 360]);
  // motion 위치의 값을 원하는 값으로 변경
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      'linear-gradient(135deg, rgb(139, 0, 238),rgb(0, 123, 238))',
      'linear-gradient(135deg, rgb(238,0,153),rgb(190, 0, 238))',
      'linear-gradient(135deg, rgb(0, 238, 182),rgb(222, 238, 0))',
    ]
  );
  // scroll의 위치값 (scrollY: 실체위치 px로 표시, scrollYProgress: 0~1로 비율을 표시)
  const { scrollYProgress } = useScroll();
  // scroll의 위치 값을 원하는 값으로 변경
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  return (
    <>
      <Wrapper style={{ background: gradient }}>
        <Box style={{ x, rotate, scale }} drag="x" dragSnapToOrigin />
      </Wrapper>
    </>
  );
}

export default App;
