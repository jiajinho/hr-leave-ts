import React from 'react';
import styled from 'styled-components/macro';

import type { Employee } from '../../type';
import { Column } from 'components/lib/Table/types';

import Table, {
  Table as _Table,
  Cell as _Cell,
  Header as _Header
} from 'components/lib/Table';

const Wrapper = styled.div`
  --cell-padding: 6rem 0;


  ${_Table} {
    table-layout: auto;
  }

  ${_Header} {
    padding: var(--cell-padding);
    text-align: center;
  }

  ${_Cell} {
    padding: var(--cell-padding);
    min-width: 20rem;
    text-align: center;
    font-size: 11rem;
    color: #999;

    border-top: none;
  }

  & ${_Cell}:first-of-type {
    text-align: left;
    padding-right: 5rem;
    width: unset;
    color: black;
  }
`;


export default ({ data, columns }: {
  data: Employee[],
  columns: Column<Employee>[]
}) => {

  return (
    <Wrapper>
      <Table
        data={data}
        columns={columns}
        pageSize={10}
      />
    </Wrapper>
  )
}