import React from 'react';
import styled from 'styled-components/macro';
import { DropdownList as WidgetDropdownList } from 'react-widgets/cjs';

import locale from 'locale';
import { Wrapper as _Wrapper, Title } from 'components/common/Card/styled';
import Stat from '../../../Stat';

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

const DropdownList = styled(WidgetDropdownList)`
  width: 90rem;
`;

export default ({ title, consumed, remaining }: {
  title: string,
  consumed: string,
  remaining: string
}) => {
  return (
    <div>
      <TitleContainer>
        <Title>{title}</Title>
        <DropdownList data={["2021", "2020", "2019"]} />
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