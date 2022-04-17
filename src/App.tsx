import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { Routes, useNavigate } from 'react-router-dom';

import routes from './config/routes';
import { generateRoute } from './utils';

import useNavStore from './stores/useNavStore';
import Sidebar, { Wrapper as _Sidebar } from './components/Sidebar';
import Header from './components/Header';


const Wrapper = styled.main`
  --split-threshold: 250rem;

  position: relative;
  min-height: 100vh;
  width: 100%;

  ${_Sidebar} {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: var(--split-threshold);
    min-height: 100vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: var(--split-threshold);
  right: 0;

  display: flex;
  flex-direction: column;
  padding: 20rem;

  background: #f001;
`;

const Body = styled.div`
`;

function App() {

  const navigate = useNavigate();
  const setNavigate = useNavStore(state => state.setNavigate);

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  return (
    <Wrapper>
      <Sidebar />

      <Container>
        <Header />


        <Body>
          <Routes>
            {generateRoute(routes)}
          </Routes>
        </Body>
      </Container>
    </Wrapper>
  );
}

export default App;
