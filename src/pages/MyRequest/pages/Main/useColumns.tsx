import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import type { Schema } from '../../types';
import type { Column } from 'components/lib/Table/types';

import { getNormalRouteUrl } from 'utils';
import routes from 'config/routes';
import useNavStore from 'stores/useNavStore';
import DateTime from 'components/lib/Table/plugins/DateTime';
import LeaveDuration from 'components/lib/Table/plugins/LeaveDuration';
import Vertical3Dot, { Wrapper as _Vertical3Dot } from 'components/svg/Vertical3Dot';
import Tag from './Tag';

const MoreDetail = styled.div`
  padding: 10rem 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${_Vertical3Dot} { height: 14rem }
`;

export default () => {
  const navigate = useNavStore(state => state.navigate);

  const [columns, setColumns] = useState<Column<Schema>[]>([]);

  const handleDetailClick = (r: Schema) => {
    if (navigate) {
      const route = routes.myRequest.routes!.view;
      const url = getNormalRouteUrl(
        route.render!.url,
        [{ param: 'id', value: r.id }]
      );

      navigate(route, url);
    }
  }

  useEffect(() => {
    if (navigate) {
      const columns: Column<Schema>[] = [
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
          title: "Status Supervisor",
          render: r => <Tag status={r.status.supervisor} />
        },
        {
          title: "Status HR/Admin",
          render: r => <Tag status={r.status.hr} />
        },
        {
          title: "",
          render: r => (
            <MoreDetail onClick={() => handleDetailClick(r)}>
              <Vertical3Dot />
            </MoreDetail>
          )
        }
      ];

      setColumns(columns);
    }
  }, [navigate]);

  return columns;
}
