import React, { useState } from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';
import { Wrapper as _Wrapper, Title } from 'components/common/Card/styled';
import Stat from '../../../Stat';
import MonthYearPicker from 'components/common/MonthYearPicker';

const StatBox = styled.div`
  margin: 20rem 0;
  display: flex;
  gap: 40rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20rem;
`;

export default ({ title, consumed, remaining }: {
  title: string,
  consumed: string,
  remaining: string
}) => {

  const [date, setDate] = useState<Date>();

  return (
    <div>
      <TitleContainer>
        <Title>{title}</Title>
        <MonthYearPicker
          level="year"
          value={date}
          onChange={setDate}
        />
      </TitleContainer>

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
    </div>
  );
}