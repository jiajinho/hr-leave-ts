import React from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';

import Button from 'components/lib/Button';
import CircularProgress, { Wrapper as _CircularProgress } from 'components/lib/CircularProgress';
import PlusCircle, { Wrapper as _PlusCircle } from 'components/svg/PlusCircle';
import { Wrapper as _Wrapper, Title, Stripe } from '../../../styled';
import Stat from '../Stat';

const Wrapper = styled(_Wrapper)`
  display: flex;

  ${_CircularProgress} { height: 120rem }
`;

const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;

  ${_PlusCircle} { 
    height: 23rem;
    cursor: pointer;
    transition: 0.25s;
  }

  ${_PlusCircle}:hover { opacity: 0.7 }
`;


const StatBox = styled.div`
  margin: 20rem 0;
  display: flex;
  gap: 40rem;
`;

const ProgressContainer = styled.div`
  flex-grow: 1;

  margin: 0 20rem;
  display: flex;
  justify-content: end;
`;

export default ({ title, consumed, remaining, percentage, onViewClick, onPlusClick }: {
  title: string,
  consumed: string,
  remaining: string,
  percentage: number,
  onViewClick?: () => void,
  onPlusClick?: () => void
}) => (
  <Wrapper>
    <Stripe />

    <div>
      <Heading>
        <Title>{title}</Title>
        {onPlusClick &&
          <PlusCircle
            color="var(--primary-color)"
            onClick={onPlusClick}
          />
        }
      </Heading>


      <StatBox>
        <Stat
          main={consumed}
          sub={locale.en.common.statCard.consumed}
        />

        <Stat
          main={remaining}
          sub={locale.en.common.statCard.remaining}
        />
      </StatBox>

      <Button.Classic onClick={onViewClick}>
        {locale.en.common.button.viewDetail}
      </Button.Classic>
    </div>

    <ProgressContainer>
      <CircularProgress
        background="#ccc"
        lines={[
          { color: 'var(--primary-color)', percentage }
        ]}
      />
    </ProgressContainer>

  </Wrapper>
);