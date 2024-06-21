import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';

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

function App() {
  return (
    <>
      <Wrapper>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <motion.path
            variants={svg}
            initial="hidden"
            animate="visible"
            // default 값을 정해놓고 프로퍼티 마다 다르게 설정하려면 여기 작성해야함.
            transition={{
              default: { duration: 5 },
              // fill을 따로 작성하면 default가 있어도 fill의 세부값을 다르게 줄수있다.
              fill: { duration: 2, delay: 3 },
            }}
            // stroke="white"
            // strokeWidth="2"
            d="M224 373.1c-25.2-31.7-40.1-59.4-45-83.2-22.6-88 112.6-88 90.1 0-5.5 24.3-20.3 52-45 83.2zm138.2 73.2c-42.1 18.3-83.7-10.9-119.3-50.5 103.9-130.1 46.1-200-18.9-200-54.9 0-85.2 46.5-73.3 100.5 6.9 29.2 25.2 62.4 54.4 99.5-32.5 36.1-60.6 52.7-85.2 54.9-50 7.4-89.1-41.1-71.3-91.1 15.1-39.2 111.7-231.2 115.9-241.6 15.8-30.1 25.6-57.4 59.4-57.4 32.3 0 43.4 25.9 60.4 59.9 36 70.6 89.4 177.5 114.8 239.1 13.2 33.1-1.4 71.3-37 86.6zm47-136.1C280.3 35.9 273.1 32 224 32c-45.5 0-64.9 31.7-84.7 72.8C33.2 317.1 22.9 347.2 22 349.8-3.2 419.1 48.7 480 111.6 480c21.7 0 60.6-6.1 112.4-62.4 58.7 63.8 101.3 62.4 112.4 62.4 62.9 .1 114.9-60.9 89.6-130.2 0-3.9-16.8-38.9-16.8-39.6z"
          />
        </Svg>
      </Wrapper>
    </>
  );
}

export default App;
