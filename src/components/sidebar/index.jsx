/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

//import SidebarCard from "components/sidebar/componentsrtl/SidebarCard";
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
       className={`sm:none duration-175 linear fixed !z-50 flex min-h-64 w-full flex-col bg-white-200/70 pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}  
    
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>
    <div/>

      <div className={`flex items-center mx-8 h-full w-full`}>
        <a className="navbar-brand" href="/">
          <div className="logo-image">
                <img src="https://yoursite.com/wp-admin/images/website-logo.png" height="50px" width="50px" alt="logo"/>
          </div>
        </a>
        {/* Nav item */}
        <div  className="m-auto pt-4 md:!z-50 lg:!z-50 xl:!z-0 ">
          <ul className="space-x-8 flex flex-row">
            <Links routes={routes} />
          </ul>
        </div>
      </div>
      

      {/* Free Horizon Card */}

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
