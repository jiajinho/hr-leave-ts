import React from 'react';
import styled from 'styled-components/macro';

import Table from './Table';

import mock from '../../mock-data';
import useColumns from './useColumns';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40rem;
`;

export default () => {

  const columns = useColumns();

  return (
    <Wrapper>
      <Table
        title="Pending Approvals"
        options={mock.departments}
        users={mock.pendingUsers}
        columns={columns}
      />

      <Table
        title="Approved Requests"
        options={mock.departments}
        users={mock.approvedUsers}
        columns={columns}
      />
    </Wrapper>
  );
}