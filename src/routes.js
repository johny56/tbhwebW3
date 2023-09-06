import Layout from "layouts";
import WorkOpputunity from "work_opp";

import React from "react";
import Whistleblowing from "Whistleblowing";
import ManagementTeam from "about_us/management";
import PolicyPage from "sustainability/policy_page";
import EventBoard from "activity_board";
import ContactUS from "contact_us";

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
      component: <EventBoard/>,
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
    {
      name: "contact_us",
      layout: "/contact_us",
      path: "default",
      component: <ContactUS/>,
    },
];
export default routes;