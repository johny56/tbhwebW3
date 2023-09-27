import Logo from "../logo";
import About2nav from "./about";
import Product2nav from "./product";
import Sustain2nav from "./sustain";
import { Link } from "react-router-dom";

const GREENnav = () =>{

    return (

<<<<<<< HEAD
        <nav className="fixed w-full bg-[#808080] z-40">
=======
        <nav className="fixed w-full bg-[#273F02] z-40 mb-32 ">
>>>>>>> eae5fdea2ea76133e796393d8159fcf76c86f987
            <div className="px-4 mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <Logo></Logo> {/* Replace with your logo component */}
              <div className="flex justify-center item-center ml-32 pl-32">
                  <div className="flex flex-row justify-center item-center pl-32">
                  <About2nav></About2nav>
                  <Product2nav></Product2nav>
                  <Sustain2nav></Sustain2nav>
                  </div>
              </div>
             
            </div>
            <div className="flex flex-row items-end justify-end pr-8 mb-16">
              <p className="mx-2">
                <p className="font-sans font-noto-sans-thai text-white dark:text-white hover:underline"><Link to="/work_opp">Work Opportunity</Link></p>
              </p>
              <p className="mx-2">
                <a href="#" className="font-sans font-noto-sans-thai text-white dark:text-white hover:underline">
                  <Link to="/contact_us">Contact Us</Link>
                </a>
              </p>
              <p className="mx-2">
                <a href="#" className="font-sans font-noto-sans-thai text-white dark:text-white hover:underline">TH|EN</a>
              </p>
            </div>
          </div>
          </nav>



    );

}

export default GREENnav;