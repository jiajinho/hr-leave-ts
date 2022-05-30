import React, { useEffect, useState } from 'react';

import type { Column } from 'components/lib/Table/types';
import type { Checks, LeaveBalance } from './types';

import Checkbox from 'components/lib/Checkbox';

export default (
  checkboxes: Checks,
  setCheckboxes: (c: Checks) => void
) => {

  const [columns, setColumns] = useState<Column<LeaveBalance>[]>([]);

  const handleCheck = (id: string, r: LeaveBalance) => {
    const keys = Object.keys(checkboxes);

    const clone: Checks = { ...checkboxes };

    if (keys.includes(id))
      delete clone[id];
    else
      clone[id] = r;

    setCheckboxes(clone);
  }


  useEffect(() => {

    const keys = Object.keys(checkboxes);

    const columns: Column<LeaveBalance>[] = [
      {
        title: "Check",
        render: r => (
          <Checkbox
            active={keys.includes(r.id)}
            activeColor="var(--primary-color)"
            onClick={() => handleCheck(r.id, r)}
          />
        )
      },
      {
        title: "Username",
        render: r => r.username
      },
      {
        title: "Department",
        render: r => r.department
      },
      {
        title: "Annual Entitlement",
        render: r => r.annualEntitlement
      },
      {
        title: "Current Balance to Date",
        render: r => r.currentBalance
      },
      {
        title: "Consumed",
        render: r => r.consumed
      },
      {
        title: "Total Current Balance",
        render: r => r.totalCurrentBalance
      },
      {
        title: "Projected Balance to Year End",
        render: r => r.projectedBalance
      }
    ];

    setColumns(columns);
  }, [checkboxes]);

  return columns;
}