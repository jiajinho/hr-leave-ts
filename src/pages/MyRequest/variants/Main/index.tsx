import React from 'react';
import styled from 'styled-components/macro';

import type { Schema } from '../../types';

import locale from 'locale';
import routes from 'config/routes';
import useNavStore from 'stores/useNavStore';
import Table, { Header as _Table_Header, Cell as _Table_Cell } from 'components/lib/Table';
import Button from 'components/lib/Button';
import _Button from 'components/lib/Button/styled';
import useColumns from './useColumns';

import mock from '../../mock-data';

const Wrapper = styled.div`
  padding: var(--container-padding);
  background: var(--container-bg-color);
  border-radius: var(--container-border-radius);

  display: flex;
  flex-direction: column;
  gap: 35rem;

  ${_Button} { align-self: end }

  ${_Table_Header}:last-of-type,
  ${_Table_Cell}:last-of-type {
    padding: 7rem;
    width: 2%;
  }
`;

export default () => {
  const navigate = useNavStore(state => state.navigate);

  const columns = useColumns();

  const handleNew = () => {
    const route = routes.myRequest.routes!.new;
    navigate && navigate(route);
  }

  return (
    <Wrapper>
      <Table<Schema>
        data={mock.requests}
        columns={columns}
        pageSize={5}
      />

      <Button.Classic onClick={handleNew}>
        {locale.en.myRequest.new}
      </Button.Classic>
    </Wrapper>
  )
}