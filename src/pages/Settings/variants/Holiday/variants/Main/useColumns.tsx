import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import type { Schema } from '../../types';
import type { Column } from 'components/lib/Table/types';

import DateTime from 'components/lib/Table/plugins/DateTime';
import LeaveDuration from 'components/lib/Table/plugins/LeaveDuration';
import Button from 'components/lib/Button';

import EditPen from 'components/svg/EditPen';
import Trash from 'components/svg/Trash';

const MoreDetails = styled.div`
`;

export default () => {

  const [columns, setColumns] = useState<Column<Schema>[]>([]);

  useEffect(() => {
    const columns: Column<Schema>[] = [
      {
        title: "Event",
        render: r => r.name
      },
      {
        title: "Start Time",
        render: r => <DateTime epoch={r.start} />
      },
      {
        title: "End Time",
        render: r => <DateTime epoch={r.end} />
      },
      {
        title: "Duration",
        render: r => <LeaveDuration duration={r.duration} />
      },
      {
        title: "Description",
        render: r => r.description
      },
      {
        title: <Button.Ghost>asd</Button.Ghost>,
        render: r => (
          <MoreDetails>
            <EditPen />
            <Trash />
          </MoreDetails>
        )
      }
    ];

    setColumns(columns);
  }, []);

  return columns;
}