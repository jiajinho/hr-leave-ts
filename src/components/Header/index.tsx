import React from 'react';
import styled from 'styled-components/macro';

import useNavStore from '../../stores/useNavStore';

const Wrapper = styled.header`


`;

const Title = styled.h1`
`;

export default () => {
  const route = useNavStore(state => state.current);

  return (
    <Wrapper>
      <Title>
        {route.display.header}
      </Title>
    </Wrapper>
  );
}