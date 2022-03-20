import React from 'react';
import styled from 'styled-components';

import config from '../../config';
import Logo, { Wrapper as _Logo } from './Logo';
import Menu from './Menu';

const Wrapper = styled.nav`
  position: fixed;
  z-index: 10;
  height: 100vh;
  width: 25rem;

  padding: 2rem;
  
  background: ${config.theme.primary};

  ${_Logo} {
    height: 5rem;
  }
`;

export default () => {





  return (
    <Wrapper>
      <Logo />

      <Menu />

    </Wrapper>
  )
}