import React from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';
import Button from 'components/lib/Button';
import CircularProgress, { Wrapper as _CircularProgress } from 'components/lib/CircularProgress';
import { Wrapper as _Wrapper, Title, Stripe } from '../../../styled';
import Stat from '../components/Stat';

const Wrapper = styled(_Wrapper)`
  display: flex;

  ${_CircularProgress} {
    height: 12rem;
  }
`;

const StatBox = styled.div`
  margin: 2rem 0;
  display: flex;
  gap: 4rem;
`;

const ProgressContainer = styled.div`
  flex-grow: 1;

  margin: 0 2rem;
  display: flex;
  justify-content: end;
`;

export default ({ title, consumed, remaining, percentage, onViewClick }: {
  title: string,
  consumed: string,
  remaining: string,
  percentage: number,
  number: number,
  onViewClick: () => void
}) => (
  <Wrapper>
    <Stripe />

    <div>
      <Title>{title}</Title>

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
        View Details
      </Button.Classic>
    </div>

    <ProgressContainer>
      <CircularProgress
        background={`var(--primary-color)33`}
        lines={[
          { color: 'var(--primary-color)', percentage }
        ]}
      />
    </ProgressContainer>

  </Wrapper>
);