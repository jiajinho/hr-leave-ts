import React from 'react';
import styled from 'styled-components/macro';
import { format } from 'date-fns';

import locale from 'locale';

const Wrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 0;

  width: 300rem;
  padding: 25rem 20rem;

  border-left: 2rem solid #eee;
`;

const Title = styled.h4`
  font-weight: bold;
  font-size: 15rem;
`;

const Date = styled.p`
  margin: 7rem 0;
  color: #aaa;
  font-size: 12rem;
`;

export default ({ date }: {
  date: Date
}) => {


  return (
    <Wrapper>
      <Title>
        {locale.en.myRequest.schedules}
      </Title>

      <Date>
        {format(date, "MMMM d, EEEE")}
      </Date>
    </Wrapper>
  );
}