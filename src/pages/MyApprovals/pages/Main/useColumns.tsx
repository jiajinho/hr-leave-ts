import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import type { User } from '../../types';
import type { Column } from 'components/lib/Table/types';

import Username from 'components/lib/Table/plugins/Username';
import DateTime from 'components/lib/Table/plugins/DateTime';
import LeaveDuration from 'components/lib/Table/plugins/LeaveDuration';
import Vertical3Dot, { Wrapper as _Vertical3Dot } from 'components/svg/Vertical3Dot';

const MoreDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  & > div {
    padding: 7rem;
    margin: 0 20rem;
    cursor: pointer;
  }

  & ${_Vertical3Dot} {
    height: 13rem;
  }
`;

export default () => {
  const [columns, setColumns] = useState<Column<User>[]>([]);

  useEffect(() => {
    const columns: Column<User>[] = [
      {
        title: "Username",
        render: r => (
          <Username
            imgUrl={r.thumbnail}
            name={r.name}
          />
        )
      },
      {
        title: "Leave Type",
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
        render: r => <LeaveDuration duration={r.duration} />
      },
      {
        title: "",
        render: r => (
          <MoreDetails>
            <div>
              <Vertical3Dot />
            </div>
          </MoreDetails>
        )
      }
    ];

    setColumns(columns);
  }, []);

  return columns;
}