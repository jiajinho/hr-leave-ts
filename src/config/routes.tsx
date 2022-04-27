import Dashboard from 'pages/Dashboard';
import MyRequest from 'pages/MyRequest';
import MyLeaveBal from 'pages/MyLeaveBal';
import Settings from 'pages/Settings';
import MyApprovals from 'pages/MyApprovals';
import ActivityLog from 'pages/ActivityLog';

import Home from 'components/svg/Home';
import DocumentText from 'components/svg/DocumentText';
import Gear from 'components/svg/Gear';
import Database from 'components/svg/Database';
import CheckCircle from 'components/svg/CheckCircle';
import DocumentReport from 'components/svg/DocumentReport';

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

const dashboard: Route = {
  display: { sidebar: "Dashboard", header: "Dashboard" },
  render: {
    url: "/",
    component: <Dashboard />
  },
  icon: Home
}

const myRequest: Route = {
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
}

const myApprovals: Route = {
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
}

const activityLog: Route = {
  display: { sidebar: "Activity Logs", header: "Activity Logs" },
  render: {
    url: "/activity-log",
    component: <ActivityLog />
  },
  icon: DocumentReport
}

const myLeaveBal: Route = {
  display: { sidebar: "My Leave Balance", header: "My Leave Balance" },
  render: {
    url: "/my-leave-balance",
    component: <MyLeaveBal />
  },
  icon: Database
}

const settings: Route = {
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

const routes: { [k: string]: Route } = {
  dashboard,
  myRequest,
  myApprovals,
  activityLog,
  myLeaveBal,
  settings
}

export default routes;