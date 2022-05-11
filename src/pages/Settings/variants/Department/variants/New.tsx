import React, { useState } from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';
import Form from '../Form';

const Wrapper = styled.div`
`;

export default () => {

  const [name, setName] = useState("");
  const [comments, setComments] = useState("");


  return (
    <Wrapper>

      <Form
        name={[name, setName]}

        comments={[comments, setComments]}

        okText={locale.en.common.button.create}

      />
    </Wrapper>
  );
}