import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Form from '../Form';

import locale from 'locale';
import type { Holiday } from '../types';

const Wrapper = styled.div`
`;

export default () => {

  return (
    <Wrapper>
      <Form
        okText={locale.en.common.button.create}
        cancelText={locale.en.common.button.reset}
      />
    </Wrapper>
  )
}