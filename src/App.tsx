import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Routes, useNavigate, useLocation } from 'react-router-dom';

import type { Route as RouteType } from './config/routes';

import routes from './config/routes';
import { generateRoute } from './utils';

import useNavStore from './stores/useNavStore';
import Sidebar, { Wrapper as _Sidebar } from './components/Sidebar';
import Header from './components/Header';

const Wrapper = styled.main`
  --split-threshold: 230rem;

  position: relative;
  min-height: 100vh;
  width: 100%;

  background: #fafafa;

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
  padding: 0 30rem;
`;

const Body = styled.div`
  padding: 20rem 0;
`;

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const setNavigate = useNavStore(state => state.setNavigate);
  const setCurrent = useNavStore(state => state.setCurrent);

  const [nodes, setNodes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    setNavigate((r: RouteType, overwriteUrl?: string) => {
      if (r.render?.url) {
        setCurrent(r);

        const url = overwriteUrl ? overwriteUrl : r.render.url;
        navigate(url);
      }
    });

    setNodes(generateRoute(routes, location.pathname));
  }, [navigate]);

  return (
    <Wrapper>
      <Sidebar />

      <Container>
        <Header />

        <Body>
          <Routes>
            {nodes}
          </Routes>
        </Body>
      </Container>
    </Wrapper>
  );
}

export default App;
