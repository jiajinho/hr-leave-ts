import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import locale from 'locale';
import routes from 'config/routes';
import type { Column } from 'components/lib/Table/types';
import type { Department } from '../../types';
import useNavStore from 'stores/useNavStore';
import { fillRouteParam } from 'utils';

import Button from 'components/lib/Button';
import EditPen, { Wrapper as _EditPen } from 'components/svg/EditPen';
import Trash, { Wrapper as _Trash } from 'components/svg/Trash';

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

export default (openDelDeptModal: (d: Department) => void) => {
  const navigate = useNavStore(state => state.navigate);

  const [columns, setColumns] = useState<Column<Department>[]>([]);

  const handleNewClick = () => {
    const route = routes.settings.routes!.department!.routes!.new!;

    navigate && navigate(route);
  }

  const handleEditClick = (r: Department) => {
    const route = routes.settings.routes!.department!.routes!.edit!;

    if (navigate && route.render) {
      const url = fillRouteParam(
        route.render.url,
        [{ param: 'id', value: r.id }]
      );

      navigate(route, url);
    }
  }

  useEffect(() => {
    const columns: Column<Department>[] = [
      {
        title: "Name",
        render: r => r.name
      },
      {
        title: "Status",
        render: r => r.isActive ? "Active" : "Not Active"
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
            <Trash onClick={() => openDelDeptModal(r)} />
          </ActionCell>
        )
      }
    ];

    setColumns(columns);
  }, []);

  return columns;
}