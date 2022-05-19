import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { TimePicker } from 'react-next-dates';
import { enUS } from 'date-fns/locale';
import { format } from 'date-fns';

import datetime from 'config/datetime';
import type { Column } from 'components/lib/Table/types';
import type { Day } from './types';

import Input from 'components/lib/Input';
import Clock, { Wrapper as _Clock } from 'components/svg/Clock';

const TimeContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 200rem;

  .react-next-dates {
    margin-top: 3rem;
    top: 100% !important;
  }

  .clock-selection,
  .clock-selection::before,
  .clock-selection::after {
    background: var(--primary-color) !important;
  }

  ${_Clock} { height: 20rem }
`;

export default () => {

  const [columns, setColumns] = useState<Column<Day>[]>([]);

  //Test
  const [start, setStart] = useState<Date>(new Date());
  const [end, setEnd] = useState<Date>(new Date());


  useEffect(() => {
    const columns: Column<Day>[] = [
      {
        title: "Day",
        render: r => r.name
      },
      {
        title: "Start Time",
        render: r => (
          <TimeContainer>
            <TimePicker
              locale={enUS}
              onChange={(d) => d && setStart(d)}
              date={start}
            >
              {({ openTimePicker }) =>
                <Input
                  icon={<Clock color="var(--primary-color)" />}
                  value={format(start, datetime.format.timePicker)}
                  onClick={openTimePicker}
                />
              }
            </TimePicker>
          </TimeContainer>
        )
      },
      {
        title: "End Time",
        render: r => (
          <TimeContainer>
            <TimePicker
              locale={enUS}
              onChange={(d) => d && setEnd(d)}
              date={end}
            >
              {({ openTimePicker }) =>
                <Input
                  icon={<Clock color="var(--primary-color)" />}
                  value={format(end, datetime.format.timePicker)}
                  onClick={openTimePicker}
                />
              }
            </TimePicker>
          </TimeContainer>
        )
      },
      {
        title: "Total Hours",
        render: r => 2
      }
    ];

    setColumns(columns);
  }, [start, end]);


  return columns;
}