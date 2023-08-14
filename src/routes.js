import React from "react";

// Admin Imports
import Dashboard from "views/admin/default";
import Ourproducts from "views/admin/marketplace";
//import Profile from "views/admin/profile";
import Sustain from "views/admin/tables";

// Auth Imports
//import SignIn from "views/auth/SignIn";

// Icon Imports
import { ImHome } from "react-icons/im";
//import { IoAccessibility } from "react-icons/io5";
import { IoIosPeople,IoIosFlag,IoIosContact } from "react-icons/io";


const routes = [
  {
    name: "About TBH",
    layout: "/admin",
    path: "default",
    icon: <ImHome className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    name: "Our Products",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <IoIosPeople className="h-6 w-6" />,
    component: <Ourproducts />,
    secondary: true,
  },
  {
    name: "Sustainability",
    layout: "/admin",
    icon: <IoIosFlag className="h-6 w-6" />,
    path: "data-tables",
    component: <Sustain />,
  },
  /*
  {
    name: "Overall Sustain",
    layout: "/admin",
    path: "profile",
    icon: <IoIosFlag className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Work Opputunity",
    layout: "/auth",
    path: "sign-in",
    icon: <IoIosContact className="h-6 w-6" />,
    component: <SignIn />,
  },
  */
];
export default routes;
