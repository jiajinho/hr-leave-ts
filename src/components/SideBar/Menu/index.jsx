import React from 'react';
import styled from 'styled-components/macro';
import { Menu as AntMenu } from 'antd';

import routes from '../../../config/routes';
import { generateMenu } from './utils';

const Wrapper = styled.div`
`;

const Menu = styled(AntMenu)`
  background: #fff0;
`;

export default () => {

  return (
    <Wrapper>
      <Menu mode="inline">

      </Menu>
    </Wrapper>
  );
}