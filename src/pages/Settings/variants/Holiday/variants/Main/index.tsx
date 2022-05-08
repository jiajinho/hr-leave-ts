import React, { useState } from 'react';
import styled from 'styled-components/macro';

import useColumns from './useColumns';
import mock from '../../mock-data';


import MonthYearPicker, {
  Wrapper as _MonthYearPicker,
  CalendarContainer as _MonthYearPicker__CalendarContainer
} from 'components/common/MonthYearPicker';

import Table from 'components/lib/Table';
import { Schema } from '../../types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${_MonthYearPicker} { align-self: end }

  ${_MonthYearPicker__CalendarContainer} {
    left: unset;
    right: 0;
  }
`;

const Container = styled.div`
`;

export default () => {

  const [date, setDate] = useState(new Date());

  const columns = useColumns();

  return (
    <Wrapper>
      <MonthYearPicker
        level="year"
        value={date}
        onChange={setDate}
      />

      <Table<Schema>
        columns={columns}
        data={mock}
        pageSize={10}
      />
    </Wrapper>
  );
}