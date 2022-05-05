import React, { useState } from 'react';
import styled from 'styled-components/macro';

import ActualCalendar from './components/ActualCalendar';
import Schedules from './components/Schedules';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default () => {

  const [date, setDate] = useState<Date>();

  return (
    <Wrapper>
      <ActualCalendar />
      <Schedules />
    </Wrapper>
  );
}