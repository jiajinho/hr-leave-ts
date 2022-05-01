import React from 'react';
import styled from 'styled-components/macro';

import Card from 'components/common/Card';
import MovementChart from './components/MovementChart';
import Calendar from './components/Calendar';

const Wrapper = styled.div`
  --gap: 25rem;

`;

const CardContainer = styled.div`
  display: flex;
  gap: var(--gap);

  & > * { width: 100% }
`;

const ChartContainer = styled.div`
  margin-top: var(--gap);

  display: flex;
  gap: var(--gap);
`;

export default () => {


  return (
    <Wrapper>

      <CardContainer>
        <Card.Statistic.Classic
          title="My Requests"
          consumed="12"
          remaining="8"
          percentage={70}
          onPlusClick={() => console.log("clicked plus!")}
        />

        <Card.Statistic.Classic
          title="My Approvals"
          consumed="02"
          remaining="04"
          percentage={50}
        />
      </CardContainer>

      <ChartContainer>
        <MovementChart />
        <Calendar />
      </ChartContainer>
    </Wrapper>
  );
}