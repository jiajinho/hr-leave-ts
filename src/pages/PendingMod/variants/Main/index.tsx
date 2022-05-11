import React from 'react';
import styled from 'styled-components/macro';

import type { User } from 'pages/PendingMod/types';
import mock from '../../mock-data';

import Table from 'components/lib/Table';
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

      <Table<User>
        data={mock}
        columns={columns}
        pageSize={5}
      />

    </Wrapper>
  )
}