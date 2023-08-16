import Header from "layouts/header";
import Homepage from "layouts/homepage";

import React from "react";

const routes = [
    {
      name: "Homepage",
      layout: "/homepage",
      path: "default",
      component: <Homepage />,
    },
    {
      name: "Header",
      layout: "/header",
      path: "default",
      component: <Header />,
    },
];
export default routes;