import React from 'react';
import styled from 'styled-components/macro';

import PrunableCheckbox from 'components/common/PrunableCheckbox';
import data from './data';

const Wrapper = styled.div`
`;

export default () => {
  return (
    <Wrapper>
      working day

      <PrunableCheckbox
        options={data.days}
        max={4}
      />
    </Wrapper>
  );
}