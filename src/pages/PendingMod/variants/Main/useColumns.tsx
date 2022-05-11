import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import type { Column } from 'components/lib/Table/types';
import type { User } from 'pages/PendingMod/types';

import Username from 'components/lib/Table/plugins/Username';
import DateTime from 'components/lib/Table/plugins/DateTime';
import LeaveDuration from 'components/lib/Table/plugins/LeaveDuration';
import Tag from 'components/common/Tag';



export default () => {

  const [columns, setColumns] = useState<Column<User>[]>([]);

  useEffect(() => {
    const columns: Column<User>[] = [
      {
        title: "Username",
        render: r => (
          <Username
            imgUrl={r.thumbnail}
            name={r.username}
          />
        )
      },
      {
        title: "Supervisor",
        render: r => r.supervisor
      },
      {
        title: "Type of Leave",
        render: r => r.type
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
        title: "Leave Duration",
        render: r => <LeaveDuration duration={2} />
      }
    ];

    setColumns(columns);
  }, []);


  return columns;
}