import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Form from '../Form';

import locale from 'locale';

const Wrapper = styled.div`
`;

export default () => {

  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <Wrapper>
      <Form
        name={name}
        setName={setName}

        duration={duration}

        desc={desc}
        setDesc={setDesc}

        okText={locale.en.common.button.create}
        cancelText={locale.en.common.button.reset}
      />
    </Wrapper>
  )
}