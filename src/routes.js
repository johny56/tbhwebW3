import Layout from "layouts";
import WorkOpputunity from "work_opp";

import React from "react";

const routes = [
    {
      name: "Layouts",
      layout: "/layouts",
      path: "default",
      component: <Layout />,
    },
    {
      name: "work_opputunity",
      layout: "work_opp",
      path: "default",
      component: <WorkOpputunity />,
    },
];
export default routes;