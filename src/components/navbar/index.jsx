import Dropdown from "components/dropdown";

//import Image from './assets/img/dashboards/logo.png'

const Navbar = () => {

    return (
      // <div className=" max-w-screen bg-transparent">
      <div>
     
        
        <div className="px-4 mx-auto">
            <div className="flex items-end justify-end">
                <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm pr-8">
                    <li>
                        <a href="#" className="text-white dark:text-white hover:underline" aria-current="page">Work Opportunity</a>
                    </li>
                    <li>
                        <a href="#" className="text-white dark:text-white hover:underline">Contact Us</a>
                    </li>
                    <li>
                        <a href="#" className="text-white dark:text-white hover:underline">TH/EN</a>
                    </li>
                    
                </ul>
            </div>
        </div>

        <a href="#" className="flex flex-row items-start justify-start mx-auto px-10">
        {/* <img src="https://drive.google.com/uc?export=view&id=15ATIlQ_vdTY2ksjTwW-mK-QcFMJMzBcQ" className="h-13 w-12" /> */}
        <img src="https://drive.google.com/uc?export=view&id=15ATIlQ_vdTY2ksjTwW-mK-QcFMJMzBcQ" className="h-12 w-12" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
      

        <div className="flex flex-wrap item-center justify-center">
          <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
            <ul className="flex flex-row font-medium md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <Dropdown></Dropdown>
            </ul>
          </div>
        </div>
        
        
   
      </div>
    
    

    );
  };
  
  export default Navbar;

  //nav  --  className="bg-blend-screen max-w-screen p-4 border-4 bg-gray-50 dark:bg-gray-700"
 // https://drive.google.com/file/d/15ATIlQ_vdTY2ksjTwW-mK-QcFMJMzBcQ/view?usp=drive_link

 //https://drive.google.com/uc?export=view&id=15ATIlQ_vdTY2ksjTwW-mK-QcFMJMzBcQ