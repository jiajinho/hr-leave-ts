import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import routes from '../../config/routes';
import useNavStore from '../../stores/useNavStore';

import { generateAccordion } from './utils';
import Accordion, { Wrapper as _Accordion, Title as _Accordion_Title } from './components/Accordion';
import Logo, { Wrapper as _Logo } from './components/Logo';
import Logout from '../svg/Logout';

export const Wrapper = styled.div`
  --nearest-accordion-margin: 10rem;
  --nearest-accordion-title-padding: 15rem 10rem;

  padding-top: 30rem;
  padding-bottom: 40rem;
  background: var(--primary-color);
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${_Logo} {
    align-self: center;
  }

  & > ${_Accordion} {
    margin: var(--nearest-accordion-margin);
  }

  & > ${_Accordion} > ${_Accordion_Title} {
    padding: var(--nearest-accordion-title-padding);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nav = styled.div`
  margin: 40rem 0;
  align-self: stretch;
  
  & > ${_Accordion} {
    margin: var(--nearest-accordion-margin);
  }

  & > ${_Accordion} > ${_Accordion_Title} {
    padding: var(--nearest-accordion-title-padding)
  }
`;

export default () => {
  const navigate = useNavStore(state => state.navigate);
  const [nodes, setNodes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (navigate) setNodes(generateAccordion(routes));
  }, [navigate]);


  return (
    <Wrapper>
      <Container>
        <Logo />
        <Nav>{nodes}</Nav>
      </Container>


      <Accordion
        title="Logout"
        SVGElement={Logout}
        onClick={() => console.log("logout!")}
      />
    </Wrapper>
  )
}