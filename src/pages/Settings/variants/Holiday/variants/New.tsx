import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Form from '../Form';

import locale from 'locale';

export default () => {
  /**
   * Hooks
   */
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(0);
  const [start, setStart] = useState<Date | null>();
  const [end, setEnd] = useState<Date | null>();
  const [desc, setDesc] = useState("");

  /**
   * Not hook
   */
  const handleCancel = () => {
    setName("");
    setDuration(0);
    setStart(null);
    setEnd(null);
    setDesc("");
  }

  const handleOk = () => {
    console.log("!23123ok!");
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

      okText={locale.en.common.button.create}
      onOk={handleOk}

      cancelText={locale.en.common.button.reset}
      onCancel={handleCancel}
    />
  )
}