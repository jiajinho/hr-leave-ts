import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { TimePicker } from 'react-next-dates';
import { enUS } from 'date-fns/locale';

import type { Column } from 'components/lib/Table/types';
import type { Day } from './types';

import Input from 'components/lib/Input';
import Clock, { Wrapper as _Clock } from 'components/svg/Clock';

const TimeContainer = styled.div`
  position: relative;
  width: 200rem;

  .react-next-dates {
    margin-top: 3rem;
    top: 100% !important;
  }

  ${_Clock} {
    height: 20rem;
  }
`;

export default () => {

  const [columns, setColumns] = useState<Column<Day>[]>([]);

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
            <TimePicker locale={enUS}>
              {({ inputProps, openTimePicker }) =>
                <Input
                  icon={<Clock color="var(--primary-color)" />}
                  onClick={openTimePicker}
                />
                // <input {...inputProps} />
              }
            </TimePicker>
          </TimeContainer>
        )
      },
      {
        title: "End Time",
        render: r => r.end
      },
      {
        title: "Total Hours",
        render: r => 2
      }
    ];

    setColumns(columns);
  }, []);


  return columns;
}