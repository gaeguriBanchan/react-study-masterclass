import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}

const Dummy = ({ text, active = false }: DummyProps) => {
  return <H1>{text}</H1>;
};

function App() {
  return (
    <Container>
      <H1>hello</H1>
      <Dummy active={true} text="asd"></Dummy>
    </Container>
  );
}

export default App;
