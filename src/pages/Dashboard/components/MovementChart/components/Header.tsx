import React from 'react';
import styled from 'styled-components/macro';

import mock from '../mock-data';

import SearchInput from 'components/common/SearchInput';
import Button from 'components/lib/Button';
import PrunableRadio from 'components/common/PrunableRadio';
import MonthYearPicker, { CalendarContainer as _MonthYearPicker__CalendarContainer } from 'components/common/MonthYearPicker';

const Wrapper = styled.header`
  --gap: 10rem;

  & > * {
    display: flex;
    align-items: center;
    gap: var(--gap);
  }
`;

const Top = styled.div`
  & > h2 { flex-grow: 1 }
`;

const Bottom = styled.div`
  margin-top: 10rem;
  margin-bottom: 15rem;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: var(--gap);
  }

  ${_MonthYearPicker__CalendarContainer} {
    left: unset;
    right: 0;
  }
`;

export default ({ date, setDate }: {
  date: Date,
  setDate: (d: Date) => void
}) => {

  return (
    <Wrapper>
      <Top>
        <h2>Movement Chart</h2>

        <SearchInput />
        <Button.Ghost>
          Export
        </Button.Ghost>
      </Top>

      <Bottom>
        <div>
          <h3>Department</h3>
          <PrunableRadio options={mock.departments} max={4} />
        </div>

        <MonthYearPicker
          level="month"
          value={date}
          onChange={setDate}
        />
      </Bottom>



    </Wrapper>
  );
}