import React from 'react';
import styled from 'styled-components/macro';

import CaretDown, { Wrapper as _CaretDown } from 'components/svg/CaretDown';

const Wrapper = styled.header`
  padding: var(--item-padding);
  height: 80rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${_CaretDown} {
    height: 8rem;
  }
`;

const Title = styled.h3`
  font-weight: normal;

`;

export default () => {


  return (
    <Wrapper>
      <CaretDown direction="left" />

      <Title>October 2021</Title>

      <CaretDown direction="right" />
    </Wrapper>
  );
}