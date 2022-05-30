import React from 'react';
import styled from 'styled-components/macro';
import Contact from './components/Contact';

import General from './components/General';
import Others from './components/Others';

const Wrapper = styled.div`
  --gap: 20rem;
  
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  max-width: 1000rem;
  padding: var(--container-padding);
  background: var(--container-bg-color);
  border-radius: var(--container-border-radius);

  margin: 0 auto;

  & > section {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }
`;

export default () => {


  return (
    <Wrapper>
      <General />

      <Contact />

      <Others />
    </Wrapper>
  );
}