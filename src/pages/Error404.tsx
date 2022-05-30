import React from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';

const Wrapper = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 130rem;
`;

const Subtitle = styled.h2`
  font-size: 30rem;
`;

const Description = styled.p`
  margin: 10rem 0;
  color: #888;
`;

export default () => (
  <Wrapper>
    <Title>
      {locale.en.error404.title}
    </Title>

    <Subtitle>
      {locale.en.error404.subtitle}
    </Subtitle>

    <Description>
      {locale.en.error404.description}
    </Description>
  </Wrapper>
);
