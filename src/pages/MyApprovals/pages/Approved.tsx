import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import type { User } from 'pages/MyApprovals/types';
import mock from '../mock-data';

import Form from 'pages/MyApprovals/Form';

export default () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<User>();

  useEffect(() => {
    let dataExist = false;

    for (let i = 0; i < mock.approvedUsers.length; i++) {
      if (mock.approvedUsers[i].id === id) {
        setData(mock.approvedUsers[i]);
        dataExist = true;
        break;
      }
    }

    !dataExist && setData(undefined);
  }, [id]);

  return (
    <Form
      readOnly
      defaults={{
        username: data?.name,
        type: data?.type,
        start: data ? new Date(data.start * 1000) : undefined,
        end: data ? new Date(data.end * 1000) : undefined,
        duration: data?.duration.toString(),
        reason: data?.reason,
        comments: data?.comments
      }}
    />
  );
}