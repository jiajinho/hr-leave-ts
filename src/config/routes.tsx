import type { Type as UserType } from 'stores/useUserStore';

import Dashboard from 'pages/Dashboard';
import MyRequest from 'pages/MyRequest';
import MyLeaveBal from 'pages/MyLeaveBal';
import Settings from 'pages/Settings';
import MyApprovals from 'pages/MyApprovals';
import ActivityLog from 'pages/ActivityLog';
import Error404 from 'pages/Error404';
import Users from 'pages/Users';
import PendingMod from 'pages/PendingMod';

import Home from 'components/svg/Home';
import DocumentText from 'components/svg/DocumentText';
import Gear from 'components/svg/Gear';
import Database from 'components/svg/Database';
import CheckCircle from 'components/svg/CheckCircle';
import DocumentReport from 'components/svg/DocumentReport';
import User from 'components/svg/User';
import Hourglass from 'components/svg/Hourglass';

/**
 * Type declaration
 */
export type Route = {
  allowUsers?: UserType[]
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

/**
 * Route definitions
 */
const dashboard: Route = {
  allowUsers: ["user", "admin"],
  display: { sidebar: "Dashboard", header: "Dashboard" },
  render: {
    url: "/",
    component: <Dashboard />
  },
  icon: Home
}

const myRequest: Route = {
  allowUsers: ["user"],
  display: { sidebar: "My Request", header: "My Request" },
  render: {
    url: "/my-request",
    component: <MyRequest.Main />
  },
  icon: DocumentText,
  routes: {
    view: {
      allowUsers: ["user"],
      display: { header: "Leave Request Detail" },
      render: { url: "/my-request/view/:id", component: <MyRequest.View /> }
    },
    new: {
      allowUsers: ["user"],
      display: { header: "Leave Request Form" },
      render: { url: "/my-request/new", component: <MyRequest.New /> }
    },
    calendar: {
      allowUsers: ["user"],
      display: { header: "Leave Approval Form" },
      render: { url: "/my-request/calendar/:id", component: <MyRequest.Calendar /> }
    }
  }
}

const myApprovals: Route = {
  allowUsers: ["user"],
  display: { sidebar: "My Approvals", header: "My Approvals" },
  render: {
    url: "/my-approvals",
    component: <MyApprovals.Main />
  },
  icon: CheckCircle,
  routes: {
    pending: {
      allowUsers: ["user"],
      display: { header: "Pending Request Detail" },
      render: { url: "/my-approvals/pending/:id", component: <MyApprovals.Pending /> }
    },
    approved: {
      allowUsers: ["user"],
      display: { header: "Approved Request Detail" },
      render: { url: "/my-approvals/approved/:id", component: <MyApprovals.Approved /> }
    }
  }
}

const activityLog: Route = {
  allowUsers: ["user"],
  display: { sidebar: "Activity Logs", header: "Activity Logs" },
  render: {
    url: "/activity-log",
    component: <ActivityLog />
  },
  icon: DocumentReport
}

const myLeaveBal: Route = {
  allowUsers: ["user"],
  display: { sidebar: "My Leave Balance", header: "My Leave Balance" },
  render: {
    url: "/my-leave-balance",
    component: <MyLeaveBal />
  },
  icon: Database
}

const users: Route = {
  allowUsers: ["admin"],
  display: { sidebar: "Users", header: "Users" },
  render: {
    url: "/users",
    component: <Users.Main />
  },
  icon: User,
  routes: {
    new: {
      allowUsers: ["admin"],
      display: { header: "New User Page" },
      render: { url: "/users/new", component: <Users.New /> }
    },
    edit: {
      allowUsers: ["admin"],
      display: { header: "User Information" },
      render: { url: "/users/edit/:id", component: <Users.Edit /> }
    }
  }
}

const settings: Route = {
  allowUsers: ["admin"],
  display: { sidebar: "Settings", header: "Settings" },
  render: { url: "/settings" },
  icon: Gear,
  routes: {
    general: {
      allowUsers: ["admin"],
      display: { sidebar: "General", header: "General" },
      render: {
        url: "/settings/general",
        component: <Settings.General />
      }
    },
    working: {
      allowUsers: ["admin"],
      display: { sidebar: "Working Day", header: "Working Day" },
      render: {
        url: "/settings/working",
        component: <Settings.WorkingDay />
      }
    },
    holiday: {
      allowUsers: ["admin"],
      display: { sidebar: "Define Holidays", header: "Public Holidays" },
      render: {
        url: "/settings/holidays",
        component: <Settings.Holiday.Main />
      },
      routes: {
        new: {
          allowUsers: ["admin"],
          display: { header: "New Holiday Form" },
          render: {
            url: "/settings/holidays/new",
            component: <Settings.Holiday.New />
          }
        },
        edit: {
          allowUsers: ["admin"],
          display: { header: "Edit Holiday Form" },
          render: {
            url: "/settings/holidays/edit/:id",
            component: <Settings.Holiday.Edit />
          }
        }
      }
    }
  }
}

const pendingMod: Route = {
  allowUsers: ["admin"],
  display: { sidebar: "Pending Modifications", header: "Pending Modifications" },
  render: {
    url: "/pending-modifications",
    component: <PendingMod.Main />
  },
  icon: Hourglass
}

const error: Route = {
  display: { header: "Error 404" },
  render: { url: "/404", component: <Error404 /> },
}

const routes = {
  dashboard,

  myRequest,
  myApprovals,
  activityLog,
  myLeaveBal,

  settings,
  users,
  pendingMod,

  error
}

export default routes;