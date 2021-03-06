import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components/macro';
import { Routes, useLocation, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useControls } from 'leva';

import routes from './config/routes';
import { generateRoute } from './utils';
import useUserStore from 'stores/useUserStore';
import useFixRoute from 'hooks/useFixRoute';
import useRoutePermission from 'hooks/useRoutePermission';
import useSetupNavStore from 'hooks/useSetupNavStore';

import Sidebar, { Wrapper as _Sidebar } from './components/SideBar';
import Header from './components/Header';
import useLocalStorage from 'hooks/useLocalStorage';

import department from 'api/department';

const Wrapper = styled.main`
  --split-threshold: 230rem;

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
  const location = useLocation();

  const { admin } = useControls({
    admin: true
  });

  const nodes = useMemo(() => generateRoute(routes, location.pathname), []);
  const queryClient = useMemo(() => new QueryClient(), []);

  const setUserType = useUserStore(state => state.setType);

  useFixRoute();
  useSetupNavStore();
  useRoutePermission();
  useLocalStorage();

  useEffect(() => {
    setUserType(admin ? "admin" : "user");
  }, [admin]);

  useEffect(() => {
    // create("Sample", "Hola", "active");
    // list();
    // getById("MW93fFUOvt");

    // department.list();
    // department.destroy("MW93fFUOvt");

  }, []);

  /**
   * Render
   */
  return (
    <Wrapper>
      <Sidebar />

      <Container>
        <Header />

        <Body>
          <QueryClientProvider client={queryClient}>
            <Routes>
              {nodes}

              <Route
                path="*"
                element={<Navigate to={routes.error.render.url} replace />}
              />
            </Routes>

          </QueryClientProvider>
        </Body>
      </Container>
    </Wrapper>
  );
}

export default App;
