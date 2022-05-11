import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';
import routes from 'config/routes';
import type { Holiday } from '../../types';
import type { Column } from 'components/lib/Table/types';
import useNavStore from 'stores/useNavStore';

import DateTime from 'components/lib/Table/plugins/DateTime';
import LeaveDuration from 'components/lib/Table/plugins/LeaveDuration';
import Button from 'components/lib/Button';
import EditPen, { Wrapper as _EditPen } from 'components/svg/EditPen';
import Trash, { Wrapper as _Trash } from 'components/svg/Trash';
import { fillRouteParam } from 'utils';

const ActionCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 13rem;

  ${_EditPen}, ${_Trash} {
    height: 22rem;
    cursor: pointer;
  }
`;

export default (openDeleteModal: (h: Holiday) => void) => {
  const navigate = useNavStore(state => state.navigate);

  const [columns, setColumns] = useState<Column<Holiday>[]>([]);

  const handleNewClick = () => {
    const route = routes.settings.routes!.holiday!.routes!.new;

    navigate && navigate(route);
  }

  const handleEditClick = (r: Holiday) => {
    const route = routes.settings.routes!.holiday!.routes!.edit;

    if (navigate && route.render) {
      const url = fillRouteParam(
        route.render.url,
        [{ param: 'id', value: r.id }]
      );

      navigate(route, url);
    }
  }

  useEffect(() => {
    const columns: Column<Holiday>[] = [
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
        title: (
          <Button.Ghost onClick={handleNewClick}>
            {locale.en.common.button.new}
          </Button.Ghost>
        ),
        render: r => (
          <ActionCell>
            <EditPen onClick={() => handleEditClick(r)} />
            <Trash onClick={() => openDeleteModal(r)} />
          </ActionCell>
        )
      }
    ];

    setColumns(columns);
  }, []);

  return columns;
}