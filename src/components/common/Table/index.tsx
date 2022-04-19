import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { Row, Column } from './types';

import Pagination, { Wrapper as _Pagination } from './components/Pagination';

export const Wrapper = styled.div`
  padding: 10rem 20rem;
  padding-bottom: 25rem;
  width: 100%;

  background: white;
  border-radius: 10rem;

  display: flex;
  flex-direction: column;

  ${_Pagination} {
    align-self: end;
  }
`;

export const Header = styled.th`
  padding: 10rem 20rem;
  text-align: left;
  font-weight: 600;
`;

export const Cell = styled.td`
  padding: 20rem 20rem;
  text-align: left;

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
      <table>
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
      </table>

      <Pagination
        totalCount={data.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onBoxClick={setCurrentPage}
      />
    </Wrapper>
  );
}
