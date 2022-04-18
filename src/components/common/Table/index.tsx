import React from 'react';
import styled from 'styled-components/macro';

import { Row, Column } from './types';

export const Wrapper = styled.table`
  padding: 10rem;
  width: 100%;

  background: white;
  border-radius: 10rem;
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

const Table = <T extends Row>({ data, columns }: {
  data: T[],
  columns: Column<T>[],
}) => {

  return (
    <Wrapper>
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
        {data.map((row, i) =>
          <tr key={i}>
            {columns.map((column, j) =>
              <Cell key={j}>{column.render(row)}</Cell>
            )}
          </tr>
        )}
      </tbody>
    </Wrapper>
  );
}

export default Table;