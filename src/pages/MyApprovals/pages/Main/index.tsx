import React from 'react';
import styled from 'styled-components/macro';

import mock from '../../mock-data';
import routes from 'config/routes';

import Table from './Table';
import useColumns from './useColumns';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40rem;
`;

export default () => {
  const columns = {
    pending: useColumns(routes.myApprovals.routes!.pending),
    approved: useColumns(routes.myApprovals.routes!.approved)
  }

  return (
    <Wrapper>
      <Table
        title="Pending Approvals"
        options={mock.departments}
        users={mock.pendingUsers}
        columns={columns.pending}
      />

      <Table
        title="Approved Requests"
        options={mock.departments}
        users={mock.approvedUsers}
        columns={columns.approved}
      />
    </Wrapper>
  );
}