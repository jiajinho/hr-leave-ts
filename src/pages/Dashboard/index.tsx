import React from 'react';
import styled from 'styled-components/macro';

import useUserStore from 'stores/useUserStore';

import CardContainer from './components/CardContainer';
import MovementChart from './components/MovementChart';
import Calendar from './components/Calendar';

const Wrapper = styled.div`
  --gap: 25rem;
`;

const ChartContainer = styled.div`
  margin-top: var(--gap);

  display: flex;
  gap: var(--gap);
`;

export default () => {
  const userType = useUserStore(state => state.type);

  return (
    <Wrapper>
      {userType === "admin" ?
        <CardContainer.Admin /> :
        <CardContainer.User />
      }

      <ChartContainer>
        <MovementChart />
        <Calendar />
      </ChartContainer>
    </Wrapper>
  );
}