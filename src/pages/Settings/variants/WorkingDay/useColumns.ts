import React, { useEffect, useState } from 'react';

import { Column } from 'components/lib/Table/types';
import { Day } from './types';

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
        render: r => r.start
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