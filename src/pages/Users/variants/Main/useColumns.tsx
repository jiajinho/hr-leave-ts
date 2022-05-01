import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

import type { User } from '../../types';
import type { Column } from 'components/lib/Table/types';
import routes from 'config/routes';
import { fillRouteParam } from 'utils';

import Username from 'components/lib/Table/plugins/Username';
import EditPen, { Wrapper as _EditPen } from 'components/svg/EditPen';
import UserRemove, { Wrapper as _UserRemove } from 'components/svg/UserRemove';
import useNavStore from 'stores/useNavStore';

const ActionCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 13rem;
    
  ${_EditPen}, ${_UserRemove} {
    height: 22rem;
    cursor: pointer;
  }
`;

export default (openRevokeModal: (r: User) => void) => {
  const navigate = useNavStore(state => state.navigate);

  const [columns, setColumns] = useState<Column<User>[]>([]);

  const handleEditClick = (r: User) => {
    const route = routes.users.routes!.edit;

    if (navigate && route.render) {
      const url = fillRouteParam(
        route.render!.url,
        [{ param: 'id', value: r.id }]
      );

      navigate(route, url);
    }
  }

  useEffect(() => {
    const columns: Column<User>[] = [
      {
        title: "Name",
        render: r => (
          <Username
            imgUrl={r.thumbnail}
            name={r.name}
          />
        )
      },
      {
        title: "Department",
        render: r => r.department
      },
      {
        title: "Supervisor",
        render: r => r.supervisor
      },
      {
        title: "Email",
        render: r => r.email
      },
      {
        title: "Phone No.",
        render: r => r.phoneNo
      },
      {
        title: "Status",
        render: r => r.status
      },
      {
        title: "",
        render: r => (
          <ActionCell>
            <EditPen onClick={() => handleEditClick(r)} />
            <UserRemove onClick={() => openRevokeModal(r)} />
          </ActionCell>
        )
      }
    ];

    setColumns(columns);
  }, []);

  return columns;
}