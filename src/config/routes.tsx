import Dashboard from '../pages/Dashboard';
import MyRequest from '../pages/MyRequest';
import Settings from '../pages/Settings';

import Home from '../components/svg/Home';
import DocumentText from '../components/svg/DocumentText';
import Gear from '../components/svg/Gear';

export type Route = {
  display: {
    sidebar?: string,
    header: string
  },
  render?: {
    url: string,
    component: JSX.Element
  }
  icon?: ({ color }: { color?: string }) => JSX.Element,
  routes?: { [k: string]: Route }
}

const routes = {
  //#region Dashboard
  dashboard: {
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
  myRequest: {
    display: { sidebar: "My Request", header: "My Request" },
    render: {
      url: "/my-request",
      component: <MyRequest.Main />
    },
    icon: DocumentText,
    routes: {
      view: {
        display: { header: "Leave Request Detail" },
        render: { url: "/my-request/view/:id", component: <MyRequest.View /> }
      },
      new: {
        display: { header: "Leave Request Form" },
        render: { url: "/my-request/new", component: <MyRequest.New /> }
      }
    }
  },
  //#endregion
  //#region Settings
  settings: {
    display: {
      sidebar: "Settings",
      header: "Settings"
    },
    icon: Gear,
    routes: {
      general: {
        display: {
          sidebar: "General",
          header: "General"
        },
        render: {
          url: "/settings/general",
          component: <Settings.General />
        }
      },
      working: {
        display: {
          sidebar: "Working Day",
          header: "Working Day"
        },
        render: {
          url: "/settings/working",
          component: <Settings.WorkingDay />
        }
      }
    }
  }
  //#endregion
}

export default routes;