import React from 'react';
import styled from 'styled-components';

// interface ContainerProps {
//   bgColor: string;
// }

const Container = styled.div<CircleProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

interface CircleProps {
  bgColor: string;
}

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) => {
  console.log(`Hello ${playerObj.name}. you are ${playerObj.age} years old.`);
};

sayHello({ name: 'tom', age: 20 });
sayHello({ name: 'kim', age: 30 });

export default function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}
