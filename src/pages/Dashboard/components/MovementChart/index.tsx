import React, { useState } from 'react';
import styled from 'styled-components/macro';

import Header from './components/Header';
import Body from './components/Body';
import Legends, { Wrapper as _Legends } from 'components/common/Legends';

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  background: var(--container-bg-color);
  padding: 15rem;
  border-radius: var(--container-border-radius);

  ${_Legends} {
    margin-top: 20rem;
    align-self: end;
  }
`;

export default () => {
  const [date, setDate] = useState(new Date());

  return (
    <Wrapper>
      <Header date={date} setDate={setDate} />

      <Body date={date} />

      <Legends
        data={[
          {
            color: "red",
            label: "Christmas"
          },
          {
            color: "blue",
            label: "Turkey"
          },
          {
            color: "lightpink",
            label: "Chinese New Year"
          }
        ]}
      />
    </Wrapper>
  );
}