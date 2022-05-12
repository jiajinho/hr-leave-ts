import React from 'react';
import styled from 'styled-components/macro';
import Contact from './components/Contact';

import General from './components/General';

const Wrapper = styled.div`
  --gap: 20rem;

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
    </Wrapper>
  );
}