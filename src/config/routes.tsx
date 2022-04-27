import Dashboard from 'pages/Dashboard';
import MyRequest from 'pages/MyRequest';
import MyLeaveBal from 'pages/MyLeaveBal';
import Settings from 'pages/Settings';
import MyApprovals from 'pages/MyApprovals';

import Home from 'components/svg/Home';
import DocumentText from 'components/svg/DocumentText';
import Gear from 'components/svg/Gear';
import Database from 'components/svg/Database';
import CheckCircle from 'components/svg/CheckCircle';

export type Route = {
  display: {
    sidebar?: string,
    header: string
  },
  render: {
    url: string,
    component?: JSX.Element
  }
  icon?: ({ color }: { color?: string }) => JSX.Element,
  routes?: { [k: string]: Route }
}

const routes: { [k: string]: Route } = {
  dashboard: {
    display: { sidebar: "Dashboard", header: "Dashboard" },
    render: {
      url: "/",
      component: <Dashboard />
    },
    icon: Home
  },
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
  myLeaveBal: {
    display: { sidebar: "My Leave Balance", header: "My Leave Balance" },
    render: {
      url: "/my-leave-balance",
      component: <MyLeaveBal />
    },
    icon: Database
  },
  myApprovals: {
    display: { sidebar: "My Approvals", header: "My Approvals" },
    render: {
      url: "/my-approvals",
      component: <MyApprovals.Main />
    },
    icon: CheckCircle,
    routes: {
      pending: {
        display: { header: "Pending Request Detail" },
        render: { url: "/my-approvals/pending/:id", component: <MyApprovals.Pending /> }
      },
      approved: {
        display: { header: "Approved Request Detail" },
        render: { url: "/my-approvals/approved/:id", component: <MyApprovals.Approved /> }
      }
    }
  },
  settings: {
    display: { sidebar: "Settings", header: "Settings" },
    render: { url: "/settings" },
    icon: Gear,
    routes: {
      general: {
        display: { sidebar: "General", header: "General" },
        render: {
          url: "/settings/general",
          component: <Settings.General />
        }
      },
      working: {
        display: { sidebar: "Working Day", header: "Working Day" },
        render: {
          url: "/settings/working",
          component: <Settings.WorkingDay />
        }
      }
    }
  }
}

export default routes;