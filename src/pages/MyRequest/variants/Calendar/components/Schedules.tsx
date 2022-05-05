import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: 250rem;
  padding: 25rem 20rem;

  background: #f001;

`;

const Title = styled.h4`
  font-weight: bold;
  font-size: 15rem;
`;

const Date = styled.p`
  margin: 7rem 0;
  color: #aaa;
  font-size: 12rem;
`;

export default () => {


  return (
    <Wrapper>
      <Title>
        Schedules
      </Title>

      <Date>
        asd
      </Date>

    </Wrapper>
  );
}