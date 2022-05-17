import React, { useState } from 'react';

import Form from '../Form';

export default () => {
  /**
   * Hooks
   */
  const name = useState("");
  const supervisor = useState("");
  const start = useState<Date>();
  const end = useState<Date>();
  const type = useState("");
  const duration = useState(0);
  const reason = useState("");
  const comments = useState("");

  /**
   * Not hooks
   */
  const handleReject = () => {
    console.log('reject!');
  }

  const handleModify = () => {
    console.log('mod!');
  }

  /**
   * Render
   */
  return (
    <Form
      name={name}
      supervisor={supervisor}
      start={start}
      end={end}
      type={type}
      duration={duration}
      reason={reason}
      comments={comments}
      button={{
        onReject: handleReject,
        onModify: handleModify
      }}
    />
  );
}