import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';

import locale from 'locale';
import type { Holiday } from '../types';
import mock from '../mock-data';

import Form from '../Form';

const Wrapper = styled.div`
`;

export default () => {
  /**
   * Hooks
   */
  const { id } = useParams<{ id: string }>();

  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    for (let i = 0; i < mock.length; i++) {
      if (mock[i].id === id) {
        setName(mock[i].name);
        setDesc(mock[i].description);
        break;
      }
    }

    //write erorr handler for not found

  }, []);


  return (
    <Wrapper>
      <Form
        name={name}
        setName={setName}

        duration={""}

        desc={desc}
        setDesc={setDesc}

        okText={locale.en.common.button.update}
        cancelText={locale.en.common.button.cancel}
      />
    </Wrapper>
  );
}