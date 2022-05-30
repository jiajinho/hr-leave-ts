import React from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';
import routes from 'config/routes';
import type { User } from 'pages/PendingMod/types';

import Table, { Header as _Table__Header, Cell as _Table__Cell } from 'components/lib/Table';
import useColumns from './useColumns';

import mock from '../../mock-data';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40rem;
`;

const Container = styled.div`
  background: var(--container-bg-color);
  padding: var(--container-padding);
  border-radius: var(--container-border-radius);

  ${_Table__Header}:last-of-type,
  ${_Table__Cell}:last-of-type {
    padding: 1rem;
    width: 3%;
  }
`;

const Title = styled.h2`
  margin-bottom: 10rem;
`;

export default () => {

  const columns = {
    pending: useColumns(routes.pendingMod.routes!.pending),
    history: useColumns(routes.pendingMod.routes!.history)
  }

  return (
    <Wrapper>

      <Container>
        <Title>
          {locale.en.pendingMod.pendingMod}
        </Title>
        <Table<User>
          data={mock}
          columns={columns.pending}
          pageSize={5}
        />
      </Container>

      <Container>
        <Title>
          {locale.en.pendingMod.historyMod}
        </Title>
        <Table<User>
          data={mock}
          columns={columns.history}
          pageSize={5}
        />
      </Container>


    </Wrapper>
  )
}