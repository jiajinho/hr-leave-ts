import React from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';

import { Wrapper as _Wrapper, Title, Stripe } from '../styled';
import Button from 'components/lib/Button';
import _Button from 'components/lib/Button/styled';

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

export default ({ title, number, onClick }: {
  title: string,
  number: number,
  onClick?: () => void
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

      <Button.Classic onClick={onClick}>
        {locale.en.common.button.viewDetail}
      </Button.Classic>
    </Wrapper>
  )
}