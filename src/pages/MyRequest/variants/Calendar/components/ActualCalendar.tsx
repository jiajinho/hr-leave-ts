import React from 'react';
import styled from 'styled-components/macro';
import { Calendar as WidgetsCalendar } from 'react-widgets/cjs';

import locale from 'locale';
import Button, { Wrapper as _Button } from 'components/lib/Button';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;

  padding: 10rem 25rem;

  ${_Button} {
    align-self: end;
    margin-top: 20rem;
    margin-bottom: 10rem;
  }
`;

const Calendar = styled(WidgetsCalendar)`
  border: none;

  .rw-calendar-header { font-size: 20rem }

  .rw-calendar-transition-group {
    height: 500rem;
  }

  .rw-calendar-transition-group > div { height: 100% }

  .rw-calendar-row > .rw-cell:first-of-type { border-left: none }
  
  .rw-calendar-row > .rw-cell:last-of-type { border-right: none }

  .rw-calendar-row:first-of-type > .rw-cell { border-top: none }

  .rw-calendar-row:last-of-type > .rw-cell { border-bottom: none }

  .rw-cell{
    text-align: left;
    vertical-align: top;
    border: 1rem solid #ddd;
    border-radius: 0;
  }

  .rw-cell > span {
    font-weight: bold;
    font-size: 15rem;
  }

  .rw-cell-off-range { background: #f7f7f7 }
`;

export default ({ date, setDate }: {
  date: Date
  setDate: (d: Date) => void
}) => {
  return (
    <Wrapper>
      <Calendar
        value={date}
        onChange={setDate}
      />

      <Button.Classic>
        {locale.en.common.button.submit}
      </Button.Classic>
    </Wrapper>
  );
}