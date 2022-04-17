import React from 'react';
import styled from 'styled-components/macro';

import { Row, Column } from './types';

export const Wrapper = styled.table`
  padding: 10rem;
`;

export const Header = styled.th`
  padding: 10rem 20rem;
  text-align: left;
`;

export const Cell = styled.td`
  padding: 10rem 20rem;
  text-align: left;
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