import React, { useMemo } from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';
import routes from 'config/routes';
import useNavStore from 'stores/useNavStore';
import { generateAccordion } from './utils';

import Logout from 'components/svg/Logout';
import Accordion, { Wrapper as _Accordion, Title as _Accordion_Title } from './components/Accordion';
import Logo, { Wrapper as _Logo } from './components/Logo';

export const Wrapper = styled.div`
  --top-level-accordion-margin: 8rem;
  --top-level-accordion-title-padding: 12rem 10rem;
  --top-level-accordion-title-border-radius: 4rem;

  padding-top: 30rem;
  padding-bottom: 40rem;
  background: var(--primary-color);
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${_Logo} { align-self: center }

  & > ${_Accordion} { margin: var(--top-level-accordion-margin) }

  & > ${_Accordion} > ${_Accordion_Title} {
    padding: var(--top-level-accordion-title-padding);
    border-radius: var(--top-level-accordion-title-border-radius);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nav = styled.div`
  margin: 40rem 0;
  align-self: stretch;
  
  & > ${_Accordion} { margin: var(--top-level-accordion-margin) }

  & > ${_Accordion} > ${_Accordion_Title} {
    padding: var(--top-level-accordion-title-padding);
    border-radius: var(--top-level-accordion-title-border-radius);
  }
`;

export default () => {
  const navigate = useNavStore(state => state.navigate);
  const currentRoute = useNavStore(state => state.currentRoute);

  const nodes = useMemo(() => {
    if (navigate) {
      return generateAccordion(routes);
    }
  }, [navigate, currentRoute]);


  return (
    <Wrapper>
      <Container>
        <Logo />
        <Nav>{nodes}</Nav>
      </Container>

      <Accordion
        title={locale.en.common.logout}
        logout
        SVGElement={Logout}
        onClick={() => console.log("logout!")}
      />
    </Wrapper>
  )
}