import React, { useState } from 'react';
import styled from 'styled-components/macro';

import ActualCalendar from './components/ActualCalendar';
import Schedules from './components/Schedules';

const Wrapper = styled.div`
  margin: auto;
  width: 1100rem;
  border-radius: var(--container-border-radius);

  background: var(--container-bg-color);
`;

const Container = styled.div`
  display: flex;
`;

export default () => {

  const [date, setDate] = useState<Date>(new Date());

  return (
    <Wrapper>
      <Container>
        <ActualCalendar date={date} setDate={setDate} />
        <Schedules date={date} />
      </Container>
    </Wrapper>
  );
}