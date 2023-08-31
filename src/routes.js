import Layout from "layouts";
import WorkOpputunity from "work_opp";

import React from "react";
import Whistleblowing from "Whistleblowing";
import eventBoard from "activity_board";
import ManagementTeam from "about_us/management";
import PolicyPage from "sustainability/policy_page";

const routes = [
    {
      name: "Layouts",
      layout: "/layouts",
      path: "default",
      component: <Layout />,
    },
    {
      name: "work_opputunity",
      layout: "/work_opp",
      path: "default",
      component: <WorkOpputunity />,
    },
    {
      name: "Whistleblowing",
      layout: "/Whistleblowing",
      path: "default",
      component: <Whistleblowing/>,
    },
    {
      name: "activity_board",
      layout: "/activity_board",
      path: "default",
      component: <eventBoard/>,
    },
    {
      name: "management",
      layout: "/management",
      path: "default",
      component: <ManagementTeam/>,
    },
    {
      name: "policy-page",
      layout: "/sustainability",
      path: "default",
      component: <PolicyPage/>,
    },
];
export default routes;