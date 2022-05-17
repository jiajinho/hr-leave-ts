import React, { useState } from 'react';

import Form from '../Form';

export default () => {

  const [name, setName] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [start, setStart] = useState<Date>();
  const [end, setEnd] = useState<Date>();
  const [type, setType] = useState("");
  const [duration, setDuration] = useState(0);
  const [reason, setReason] = useState("");
  const [comments, setComments] = useState("");

  return (
    <Form
      name={[name, setName]}
      supervisor={[supervisor, setSupervisor]}
      start={[start, setStart]}
      end={[end, setEnd]}
      type={[type, setType]}
      duration={[duration, setDuration]}
      reason={[reason, setReason]}
      comments={[comments, setComments]}
    />
  );
}