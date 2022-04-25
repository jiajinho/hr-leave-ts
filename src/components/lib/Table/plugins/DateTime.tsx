import React from 'react';
import styled from 'styled-components/macro';
import { fromUnixTime, format } from 'date-fns';

export const Wrapper = styled.div`
  span { font-size: 12rem }
`;

export default ({ epoch }: { epoch: number }) => {
  // const unix = dayjs.unix(epoch);

  const date = fromUnixTime(epoch);

  return (
    <Wrapper>
      <p>{format(date, 'MMM do, yyyy')}</p>
      <span>{format(date, 'hh:mm a..aa')}</span>
    </Wrapper>
  );
}