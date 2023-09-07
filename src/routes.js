import Layout from "layouts";
import WorkOpputunity from "work_opp";

import React from "react";
import Whistleblowing from "Whistleblowing";
import ManagementTeam from "about_us/management";
import PolicyPage from "sustainability/policy_page";
import Songkran from "activity_board/songkran";
import HappyWork from "activity_board/happyWorkplace";
import ContactUS from "contact_us";
import QCC from "activity_board/qcctrain";
import Efforts from "activity_board/efforts";
import ThungSong from "activity_board/thungSong5S";


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
      name: "Songkran",
      layout: "/songkran",
      path: "default",
      component: <Songkran/>,
    },
    {
      name: "QCC",
      layout: "/qcctrain",
      path: "default",
      component: <QCC/>,
    },
    {
      name: "happyWorkplace",
      layout: "/HappyWork",
      path: "default",
      component: <HappyWork/>,
    },
    {
      name: "efforts",
      layout: "/efforts",
      path: "default",
      component: <Efforts/>,
    },
    {
      name: "thungSong5S",
      layout: "/thungSong5S",
      path: "default",
      component: <ThungSong/>,
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