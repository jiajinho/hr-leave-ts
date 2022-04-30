import React from 'react';
import styled from 'styled-components/macro';

import Card from 'components/common/Card';
import MovementChart from './components/MovementChart';

const Wrapper = styled.div`
`;

const CardContainer = styled.div`
  display: flex;
  gap: 30rem;

  & > * { width: 100% }
`;

const ChartContainer = styled.div`
  margin-top: 20rem;
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

      </ChartContainer>



    </Wrapper>
  );
}