import React from 'react';
import styled from 'styled-components/macro';

import mock from '../../mock-data';
import type { Employee } from '../../type';

import Table from './Table';
import useColumns from './useColumns';

const Wrapper = styled.div`
`;

export default ({ date }: {
  date: Date
}) => {

  const columns = useColumns(date);

  return (
    <Wrapper>
      <Table
        data={mock.employees}
        columns={columns}
      />
    </Wrapper>
  );
}