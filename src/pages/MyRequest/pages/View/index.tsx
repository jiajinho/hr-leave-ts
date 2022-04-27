import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';

import type { Schema } from 'pages/MyRequest/types';
import locale from 'locale';

import mock from 'pages/MyRequest/mock-data';

import Form, { Wrapper as _Form } from './Form';
import Card from 'components/common/Card';
import { Wrapper as _Card } from 'components/common/Card/styled';

const Wrapper = styled.div`
  position: relative;
  padding: var(--container-padding);
  
  margin: 0 auto;

  display: flex;
  align-items: start;
  justify-content: center;
  gap: 25rem;

  ${_Form}, ${_Card} { width: 100% }

  ${_Form} { max-width: var(--form-max-width) }

  ${_Card} { max-width: 550rem }
`;

export default () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Schema>();

  useEffect(() => {
    let dataExist = false;

    for (let i = 0; i < mock.requests.length; i++) {
      if (mock.requests[i].id === id) {
        setData(mock.requests[i]);
        dataExist = true;
        break;
      }
    }

    !dataExist && setData(undefined);
  }, [id]);



  return (
    <Wrapper>
      {data &&
        <Form
          start={data.start}
          end={data.end}
          duration={data.duration.toString()}
          reason={data.type}
          status={data.status.hr}
          recipients={data.recipients}
          approvers={data.approver}
          approverComment={data.approverComment}
        />
      }

      <Card.Statistic.Leave
        title={locale.en.common.statCard.leaveRecord}
        consumed="10"
        remaining="6"
        leaves={[
          { legend: "Annual", color: "red", percentage: 30 },
          { legend: "Casual Leave", color: "blue", percentage: 10 },
          { legend: "Annual Leave", color: "green", percentage: 10 }
        ]}
      />
    </Wrapper>
  )
}