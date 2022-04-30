import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { Row, Column } from './types';

import Pagination, { Wrapper as _Pagination } from './components/Pagination';

export const Wrapper = styled.div`
  --padding-left: 20rem;

  width: 100%;
  display: flex;
  flex-direction: column;

  ${_Pagination} { align-self: end }
`;

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
`;

export const Header = styled.th`
  padding: 10rem 0;
  text-align: left;
  font-weight: 600;

  &:not(:first-of-type) {
    padding-left: var(--padding-left);
  }

  vertical-align: top;
`;

export const Cell = styled.td`
  padding: 15rem 0;
  text-align: left;

  &:not(:first-of-type) {
    padding-left: var(--padding-left);
  }

  border-top: 1rem solid #e7e7e7;
`;

export default <T extends Row>({ data, columns, pageSize }: {
  data: T[],
  columns: Column<T>[],
  pageSize: number
}) => {

  const [currentPage, setCurrentPage] = useState(1);

  const index = {
    start: (currentPage - 1) * pageSize,
    end: (currentPage - 1) * pageSize + pageSize
  };

  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            {columns.map((column, i) =>
              <Header key={i}>
                {column.title}
              </Header>
            )}
          </tr>
        </thead>

        <tbody>
          {data.slice(index.start, index.end).map((row, i) =>
            <tr key={i}>
              {columns.map((column, j) =>
                <Cell key={j}>{column.render(row)}</Cell>
              )}
            </tr>
          )}
        </tbody>
      </Table>

      <Pagination
        totalCount={data.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onBoxClick={setCurrentPage}
      />
    </Wrapper>
  );
}
