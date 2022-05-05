import React from 'react';
import styled from 'styled-components/macro';
import { Calendar as WidgetsCalendar } from 'react-widgets/cjs';

const Calendar = styled(WidgetsCalendar)`
  width: 800rem;
  border: none;

  .rw-calendar-header {
    font-size: 20rem;
  }

  .rw-calendar-transition-group {
    padding: 0 25rem;
    height: 500rem;
  }

  .rw-calendar-transition-group > div {
    height: 100%;
  }

  .rw-calendar-row > .rw-cell:first-of-type {
    border-left: none;
  }
  
  .rw-calendar-row > .rw-cell:last-of-type {
    border-right: none;
  }

  .rw-calendar-row:first-of-type > .rw-cell {
    border-top: none;
  }

  .rw-calendar-row:last-of-type > .rw-cell {
    border-bottom: none;
  }

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
`;

export default () => {

  return <Calendar />
}