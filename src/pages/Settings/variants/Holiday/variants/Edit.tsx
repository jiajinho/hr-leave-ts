import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fromUnixTime } from 'date-fns';

import locale from 'locale';
import routes from 'config/routes';
import mock from '../mock-data';

import Form from '../Form';
import useNavStore from 'stores/useNavStore';

export default () => {
  /**
   * Hooks
   */
  const { id } = useParams<{ id: string }>();

  const nativeNavigate = useNavigate();
  const navigate = useNavStore(state => state.navigate);

  const [name, setName] = useState("");
  const [duration, setDuration] = useState(0);
  const [start, setStart] = useState<Date | null>();
  const [end, setEnd] = useState<Date | null>();
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (navigate) {
      let hasData = false;

      for (let i = 0; i < mock.length; i++) {
        if (mock[i].id === id) {
          setName(mock[i].name);
          setDuration(mock[i].duration);
          setStart(fromUnixTime(mock[i].start));
          setEnd(fromUnixTime(mock[i].end));
          setDesc(mock[i].description);

          hasData = true;
          break;
        }
      }

      if (!hasData) {
        const route = routes.error;
        navigate(route);
      }
    }
  }, [navigate]);

  /**
   * Not hook
   */
  const handleCancel = () => {
    nativeNavigate(-1);
  }

  const handleOk = () => {
    console.log("clicked ok!");
  }

  /**
   * Render
   */
  return (
    <Form
      name={[name, setName]}
      duration={[duration, setDuration]}
      start={[start, setStart]}
      end={[end, setEnd]}
      desc={[desc, setDesc]}

      okText={locale.en.common.button.update}
      onOk={handleOk}

      cancelText={locale.en.common.button.cancel}
      onCancel={handleCancel}
    />
  );
}