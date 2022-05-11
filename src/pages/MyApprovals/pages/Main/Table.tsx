import React from 'react';
import styled from 'styled-components/macro';

import type { User } from 'pages/MyApprovals/types';
import type { Option } from 'components/common/PrunableRadio';
import { Column } from 'components/lib/Table/types';

import SearchInput from 'components/common/SearchInput';
import Table, { Header as _Table_Header, Cell as _Table_Cell } from 'components/lib/Table';
import PrunableCheckbox from 'components/common/PrunableCheckbox';

export const Wrapper = styled.div`
  background: var(--container-bg-color);
  padding: var(--container-padding);
  border-radius: var(--container-border-radius);

  ${_Table_Header}:last-of-type,
  ${_Table_Cell}:last-of-type {
    padding: 7rem;
    width: 1%;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 30rem;

  margin-bottom: 10rem;
`;

const Title = styled.h2`
  flex-grow: 1;
`;

export default ({ title, options, users, columns }: {
  title: string,
  options: Option[],
  users: User[],
  columns: Column<User>[]
}) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>

        <PrunableCheckbox
          options={options}
          max={4}
        />

        <SearchInput />
      </Header>

      <Table<User>
        data={users}
        columns={columns}
        pageSize={5}
      />
    </Wrapper>
  );
}