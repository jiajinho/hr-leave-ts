import Dashboard from '../pages/Dashboard';
import MyRequest from '../pages/MyRequest';
import Settings from '../pages/Settings';

import Home from '../components/svg/Home';
import DocumentText from '../components/svg/DocumentText';
import Gear from '../components/svg/Gear';

export type Route = {
  display: {
    sidebar: string,
    header: string
  },
  render?: {
    url: string,
    component: JSX.Element
  }
  icon?: ({ color }: { color?: string }) => JSX.Element,
  routes?: Route[]
}

const routes: Route[] = [
  //#region Dashboard
  {
    display: {
      sidebar: "Dashboard",
      header: "Dashboard"
    },
    render: {
      url: "/",
      component: <Dashboard />
    },
    icon: Home
  },
  //#endregion
  //#region My Request
  {
    display: {
      sidebar: "My Request",
      header: "My Request"
    },
    render: {
      url: "/my-request",
      component: <MyRequest />
    },
    icon: DocumentText
  },
  //#endregion
  //#region Settings
  {
    display: {
      sidebar: "Settings",
      header: "Settings"
    },
    icon: Gear,
    routes: [
      {
        display: {
          sidebar: "General",
          header: "General"
        },
        render: {
          url: "/settings/general",
          component: <Settings.General />
        }
      },
      {
        display: {
          sidebar: "Working Day",
          header: "Working Day"
        },
        render: {
          url: "/settings/working",
          component: <Settings.WorkingDay />
        }
      }
    ]
  }
  //#endregion
]

export default routes;