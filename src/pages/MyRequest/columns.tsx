import DateTime from '../../components/common/Table/plugins/DateTime';
import LeaveDuration from '../../components/common/Table/plugins/LeaveDuration';
import Tag from './components/Tag';

import type { Column } from '../../components/common/Table/types';
import type { Schema } from './types';

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
  }
];

export default columns;