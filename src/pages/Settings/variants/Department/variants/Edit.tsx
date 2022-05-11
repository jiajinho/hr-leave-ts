import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useNavigate, useParams } from 'react-router-dom';

import locale from 'locale';
import routes from 'config/routes';
import mock from '../mock-data';

import Form from '../Form';
import useNavStore from 'stores/useNavStore';

const Wrapper = styled.div`
`;

export default () => {
  /**
   * Hooks
   */
  const { id } = useParams<{ id: string }>();

  const nativeNavigate = useNavigate();
  const navigate = useNavStore(state => state.navigate);

  const [name, setName] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    if (navigate && id) {
      let hasData = false;

      for (let i = 0; i < mock.length; i++) {
        if (mock[i].id === id) {
          setName(mock[i].name);
          setComments(mock[i].description);

          hasData = true;
          break;
        }
      }

      if (!hasData) {
        const route = routes.error;
        navigate(route);
      }
    }
  }, [navigate, id]);

  /**
   * Not hooks
   */
  const handleOk = () => {
    console.log(name);
  }

  const handleCancel = () => {
    nativeNavigate(-1);
  }

  /**
   * Render
   */
  return (
    <Wrapper>
      <Form
        name={[name, setName]}

        comments={[comments, setComments]}

        okText={locale.en.common.button.update}
        onOk={handleOk}

        cancelText={locale.en.common.button.cancel}
        onCancel={handleCancel}
      />
    </Wrapper>
  );
}