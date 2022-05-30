import React from 'react';
import styled from 'styled-components/macro';
import { Calendar as WidgetCalendar } from 'react-widgets/cjs';
import Legends, { Wrapper as _Legends } from 'components/common/Legends';

const Wrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 0;

  width: 300rem;
  padding-bottom: 15rem; 

  background: var(--container-bg-color);
  border-radius: var(--container-border-radius);
  overflow: hidden;

  display: flex;
  flex-direction: column;

  ${_Legends} { padding: 0 15rem }
`;

const Calendar = styled(WidgetCalendar)`
  flex-grow: 1;
  margin-bottom: 10rem;
  
  display: flex;
  flex-direction: column;
  border-radius: 0;
  border: none;

  .rw-calendar-transition-group { flex-grow: 1 }

  .rw-calendar-transition-group > div { height: 100% }
  
  .rw-cell {
    padding: 0;
    border: none;
  }
`;

const CalendarCell = styled.div(({ $bg = "transparent" }: {
  $bg?: string
}) => `
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${$bg};

  border-radius: 4px;
`);


export default () => {

  return (
    <Wrapper>
      <Calendar
        value={null}
        renderDay={({ date, label }) => {
          if (label === "10") return (
            <CalendarCell $bg="lightblue">
              {label}
            </CalendarCell>
          )

          return <CalendarCell>{label}</CalendarCell>;
        }}
      />

      <Legends
        data={[
          { label: "Turkey", color: "red" },
          { label: "Christmas", color: "green" },
          { label: "New Year", color: "lightblue" },
        ]}
      />
    </Wrapper>
  );
}