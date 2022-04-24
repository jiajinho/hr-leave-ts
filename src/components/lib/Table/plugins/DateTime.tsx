import React from 'react';
import styled from 'styled-components/macro';
import dayjs from 'dayjs';

export const Wrapper = styled.div`
  span { font-size: 12rem }
`;

export default ({ epoch }: { epoch: number }) => {
  const unix = dayjs.unix(epoch);

  return (
    <Wrapper>
      <p>{unix.format('MMM DD, YYYY')}</p>
      <span>{unix.format('hh:mm A')}</span>
    </Wrapper>
  );
}