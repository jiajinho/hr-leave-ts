import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Routes, useNavigate, useLocation } from 'react-router-dom';
import { useControls } from 'leva';

import type { Route as RouteType } from './config/routes';

import routes from './config/routes';
import { generateRoute } from './utils';
import useNavStore from './stores/useNavStore';
import useUserStore from 'stores/useUserStore';
import useFixRoute from 'hooks/useFixRoute';

import Sidebar, { Wrapper as _Sidebar } from './components/Sidebar';
import Header from './components/Header';
import useRoutePermission from 'hooks/useRoutePermission';

const Wrapper = styled.main`
  --split-threshold: 210rem;

  position: relative;
  min-height: 100vh;
  width: 100%;

  background: #f7f7f7;

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

  background: inherit;

  display: flex;
  flex-direction: column;
  padding: 0 30rem;
`;

const Body = styled.div`
  padding: 20rem 0;
`;

function App() {
  /**
   * Hooks
   */
  //react-router-dom
  const navigate = useNavigate();
  const location = useLocation();

  const { admin } = useControls({
    admin: true
  });

  //stores
  const setNavigate = useNavStore(state => state.setNavigate);
  const setCurrentRoute = useNavStore(state => state.setCurrentRoute);

  const setUserType = useUserStore(state => state.setType);

  const [nodes, setNodes] = useState<React.ReactNode[]>([]);

  useFixRoute();

  useEffect(() => {
    //Setup Nav
    setNavigate((r: RouteType, overwriteUrl?: string) => {
      if (r.render?.url) {
        setCurrentRoute(r);

        const url = overwriteUrl ? overwriteUrl : r.render.url;
        navigate(url);
      }
    });

    //Set Route nodes
    setNodes(generateRoute(routes, location.pathname));
  }, [navigate]);

  useEffect(() => {
    if (admin) setUserType("admin");
    else setUserType("user");
  }, [admin]);

  useRoutePermission();

  /**
   * Render
   */
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
