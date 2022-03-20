/**
 * type Route = {
 *  key: string,
 *  display: string,
 *  routes: Route[],
 *  render: () => JSX.Element
 * }
 */

export default [
  {
    key: 'settings',
    display: 'Settings',
    routes: [
      { key: 'settings.general', display: 'General' },
      { key: 'settings.holidays', display: 'Define Holidays' },
      { key: 'settings.workday', display: 'Define Working Days' },
      { key: 'settings.department', display: 'Department' }
    ]
  },
  {
    key: 'users',
    display: 'Users'
  },
  {
    key: 'leave-bal',
    display: 'Adjust Leave Balance',
  },
  {
    key: 'pending-mod',
    display: 'Pending Modifications',
  },
  {
    key: 'report',
    display: 'Report'
  }
];