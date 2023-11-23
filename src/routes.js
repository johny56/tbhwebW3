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
import NewYear23 from "activity_board/newyear23";
import NewYear22 from "activity_board/newyear22";
import BestSupplier from "activity_board/bestsupply";
import ThungSong21 from "activity_board/thungsong21";
import ourFACTORY from "about_us/ourFactory";


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
      name: "thungsong21",
      layout: "/thungsong21",
      path: "default",
      component: <ThungSong21/>,
    },
    {
      name: "thungSong5S",
      layout: "/thungSong5S",
      path: "default",
      component: <ThungSong/>,
    },
    {
      name: "newyear23",
      layout: "/newyear23",
      path: "default",
      component: <NewYear23/>,
    },
    {
      name: "newyear22",
      layout: "/newyear22",
      path: "default",
      component: <NewYear22/>,
    },
    {
      name: "bestsupply",
      layout: "/bestsupply",
      path: "default",
      component: <BestSupplier/>,
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
    {
      name: "ourFactory",
      layout: "/ourFactory",
      path: "default",
      component: <OurFACTORY/>,
    },
    {
      name: "CorevaluePage",
      layout: "/CorevaluePage",
      path: "default",
      component: <CorevaluePage/>,
    },
];
export default routes;