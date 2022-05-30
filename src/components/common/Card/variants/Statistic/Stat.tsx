import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;
`;

const Main = styled.p`
  font-weight: 700;
  font-size: 38rem;
`;

const Sub = styled.p`
  font-weight: 500;
  color: #9f9f9f;
`;

export default ({ main, sub }: {
  main: string,
  sub: string
}) => (
  <Wrapper>
    <Main>{main}</Main>
    <Sub>{sub}</Sub>
  </Wrapper>
);
