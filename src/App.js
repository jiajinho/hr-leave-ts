import styled from 'styled-components';

import config from './config';

const Wrapper = styled.div`
  min-height: 100vh;

  background: lightpink;

  @media screen and (min-width: ${config.viewport.sm}) {
    background: red;
  }

  @media screen and (min-width: ${config.viewport.md}) {
    background: blue;
  }

  @media screen and (min-width: ${config.viewport.lg}) {
    background: green;
  }

  @media screen and (min-width: ${config.viewport.xl}) {
    background: orange;
  }

`;

function App() {

  return (
    <Wrapper>
    </Wrapper>
  );
}

export default App;
