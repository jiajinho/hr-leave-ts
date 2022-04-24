import React from 'react';
import styled from 'styled-components/macro';

import { Wrapper as _Wrapper, Title, Stripe } from '../styled';
import Button from '../../../lib/Button';
import _Button from '../../../lib/Button/styled';

const Wrapper = styled(_Wrapper)`
  display: flex;
  flex-direction: column;

  ${_Button} { align-self: end }
`;

export const Number = styled.p`
  font-weight: 700;
  font-size: 60rem;
  align-self: center;
`;

export default ({ title, number }: {
  title: string,
  number: number
}) => {
  return (
    <Wrapper>
      <Stripe />
      <Title>
        {title}
      </Title>

      <Number>
        {number}
      </Number>

      <Button.Classic>
        View Details
      </Button.Classic>
    </Wrapper>
  )
}