import { useState, useEffect } from 'react';
import { getDaysInMonth, getMonth, getYear, getDay } from 'date-fns';

import type { Column } from 'components/lib/Table/types';
import type { Employee } from '../../type';

import { dayToString } from './utils';

export default (date: Date) => {
  const [columns, setColumns] = useState<Column<Employee>[]>([]);

  useEffect(() => {
    const columns: Column<Employee>[] = [
      {
        title: "",
        render: r => r.name
      }
    ];

    const daysInMonth = getDaysInMonth(date);
    const month = getMonth(date);
    const year = getYear(date);

    console.log(month, year);

    for (let i = 0; i < daysInMonth; i++) {
      const adjustedDay = i + 1;

      const date = new Date(year, month, adjustedDay);
      const day = getDay(date);

      columns.push({
        title: dayToString(day),
        render: () => {
          if (adjustedDay < 10) return `0${adjustedDay}`;
          else return adjustedDay;
        }
      })
    }

    setColumns(columns);
  }, [date]);

  return columns;
}