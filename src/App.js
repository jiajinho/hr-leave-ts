import styled from 'styled-components/macro';
import 'antd/dist/antd.css';

import config from './config';
import SideBar from './components/SideBar';


const Wrapper = styled.div`
  min-height: 100vh;
  background: ${config.theme.background};
`;

function App() {

  return (
    <Wrapper>
      <SideBar />
    </Wrapper>
  );
}

export default App;
