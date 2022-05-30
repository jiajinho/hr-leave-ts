import React, { useState } from 'react';
import styled from 'styled-components/macro';

import mock from './mock-data';
import useColumns from './useColumns';

import MonthYearPicker, {
  Wrapper as _MonthYearPicker,
  CalendarContainer as _MonthYearPicker__CalendarContainer
} from 'components/common/MonthYearPicker';

import Table, { Wrapper as _Table } from 'components/lib/Table';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20rem;

  ${_MonthYearPicker} { width: 170rem }

  ${_MonthYearPicker__CalendarContainer} {
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

  const [month, setMonth] = useState<Date>();

  return (
    <Wrapper>
      <MonthYearPicker
        level="month"
        value={month}
        onChange={setMonth}
      />

      <Table
        data={mock}
        columns={columns}
        pageSize={5}
      />
    </Wrapper>
  );
}