import React from 'react';
import styled from 'styled-components/macro';

import mock from './mock-data';
import useColumns from './useColumns';

import MonthPicker, {
  Wrapper as _MonthPicker,
  CalendarContainer as _MonthPicker_CalendarContainer
} from 'components/common/MonthPicker';

import Table, { Wrapper as _Table } from 'components/lib/Table';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20rem;

  ${_MonthPicker} { width: 170rem }

  ${_MonthPicker_CalendarContainer} {
    right: 0;
    left: unset;
  }

  ${_Table} {
    background: var(--container-bg-color);
    border-radius: var(--container-border-radius);
    padding: var(--container-padding);
  }
`;

export default () => {

  const columns = useColumns();

  return (
    <Wrapper>
      <MonthPicker />

      <Table
        data={mock}
        columns={columns}
        pageSize={5}
      />
    </Wrapper>
  );
}