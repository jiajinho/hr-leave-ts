import { useState, useEffect } from 'react';

import type { Schema } from './types';
import type { Column } from 'components/lib/Table/types';

export default () => {
  const [columns, setColumns] = useState<Column<Schema>[]>([]);

  useEffect(() => {
    const columns: Column<Schema>[] = [
      {
        title: "Leave Type",
        render: r => r.type
      },
      {
        title: "Annual Entitlement",
        render: r => r.annualEntitlement
      },
      {
        title: "Additional Leaves",
        render: r => r.additionalLeave
      },
      {
        title: "Consumed",
        render: r => r.consumed
      },
      {
        title: "Current Balance to date",
        render: r => r.currentBalance
      },
      {
        title: "Total Current Balance",
        render: r => r.totalBalance
      },
      {
        title: "Projected Balance",
        render: r => r.projectedBalance
      }
    ];

    setColumns(columns);
  }, []);

  return columns;
}