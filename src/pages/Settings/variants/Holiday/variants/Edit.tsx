import React from 'react';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';


import locale from 'locale';
import Form from '../Form';

const Wrapper = styled.div`
`;

export default () => {
  /**
   * Hooks
   */
  const { id } = useParams<{ id: string }>();

  console.log(id);


  return (
    <Wrapper>
      <Form
        okText={locale.en.common.button.update}
        cancelText={locale.en.common.button.cancel}
      />
    </Wrapper>
  );
}