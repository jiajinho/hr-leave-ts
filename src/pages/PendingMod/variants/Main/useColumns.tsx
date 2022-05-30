import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import type { Route } from 'config/routes';
import type { Column } from 'components/lib/Table/types';
import type { User } from 'pages/PendingMod/types';
import { fillRouteParam } from 'utils';
import useNavStore from 'stores/useNavStore';

import Username from 'components/lib/Table/plugins/Username';
import DateTime from 'components/lib/Table/plugins/DateTime';
import LeaveDuration from 'components/lib/Table/plugins/LeaveDuration';
import Vertical3Dot, { Wrapper as _Vertical3Dot } from 'components/svg/Vertical3Dot';
import Tag from 'components/common/Tag';

const MoreDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 7rem;
  cursor: pointer;

  ${_Vertical3Dot} { height: 13rem }
`;

export default (route: Route) => {
  const navigate = useNavStore(state => state.navigate);

  const [columns, setColumns] = useState<Column<User>[]>([]);

  const handleDetailClick = (r: User) => {
    if (navigate && route.render) {
      const url = fillRouteParam(
        route.render.url,
        [{ param: 'id', value: r.id }]
      );

      navigate(route, url);
    }
  }

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
        render: r => <LeaveDuration duration={r.duration} />
      },
      {
        title: "Status",
        render: r => <Tag status={r.status} />
      },
      {
        title: "",
        render: r => (
          <MoreDetails onClick={() => handleDetailClick(r)}>
            <Vertical3Dot />
          </MoreDetails>
        )
      }
    ];

    setColumns(columns);
  }, []);


  return columns;
}