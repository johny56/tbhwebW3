import React, { useState } from "react";
import Navbar from "components/navbar";
import { Link } from "react-router-dom";

export default function OurFACTORY() {
  const [isHidden, setIsHidden] = useState(true); // State to control visibility

  // Function to toggle the visibility of the hidden content
  const toggleHiddenContent = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <nav className="flex flex-row bg-transition fixed top-0 w-full z-40">
        <Navbar />
      </nav>

      <div className="bg-cover h-screen w-auto bg-[url(https://drive.google.com/uc?export=view&id=1OCFsHZyA9FKvkP0wgaEwsozoxmlY7Aih)] text-back text-end">
        <div className="flex flex-col items-center justify-center pt-48">
          <img
            className="h-full w-5/6 rounded-lg"
            src="https://drive.google.com/uc?export=view&id=1axpdX8sWXczDhAiMDo3U4UCaSeTZIs0e"
          />
        </div>
        <div className="flex items-center justify-center mt-24">
          {/* Button to toggle visibility */}
          <button
            // className="hover:bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={toggleHiddenContent}
          >
          <img className="h-28 w-auto hover:bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" src="https://drive.google.com/uc?export=view&id=1cy8XQkDEIFEhsay-zZ7p7uNGCh_zwwzf"/>
          </button>
        </div>
        {/* Conditional rendering based on 'isHidden' state */}
        {!isHidden && (
          <div className=" relative flex flex-col h-full w-full bg-white-200">
            <img className="h-full/2 w-4/5" src="https://drive.google.com/uc?export=view&id=1xxdfNMIwSAWQrVLnwQ4CU5JR13RJ40qd"/>
            <div className="flex justify-end  pr-12">
              <img className="h-full w-3/5" src="https://drive.google.com/uc?export=view&id=18V4VW5FwMcyioBxnaQCHY3f7UsyQE_ED"/>
            </div>
            
            

          <div className="h-full w-auto bg-white-200">
          {/* <div className="flex flex-row justify-normal py-12"> */}
          <div className="grid grid-flow-row-dense grid-cols-5 gap-0 pt-12">

            <div className="relative w-full h-auto overflow-hidden hover:opacity-75 transition">
              <Link to="/Songkran">
              <img className="h-auto w-full rounded-lg" src="https://drive.google.com/uc?export=view&id=1UOdPTaChR5J41jaoF0FtL81KGz8fKUVH" alt=""/>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-gray-200/95 text-7xl font-bold pb-18"> + </span>
              </div>
              </Link>
            </div>

            <div className="h-full max-w-full ">
              <img className="bg-cover rounded-lg " src="https://drive.google.com/uc?export=view&id=1ZxGmjXYkdO35Hmva5S3zou3eDWsg5-u5" />
            </div>
            <div className="h-full max-w-full ">
              <img className="bg-cover rounded-lg " src="https://drive.google.com/uc?export=view&id=16murF7Phpx7T2dV3qO79pYoYRHLOfjnd" />
            </div>
            <div className="h-full max-w-full ">
              <img className="bg-cover rounded-lg " src="https://drive.google.com/uc?export=view&id=1NhaMZBf2f0Snpo4wjbe4kRxkRSv_lc9j" />
            </div>
            <div className="h-full max-w-full ">
              <img className="bg-cover rounded-lg " src="https://drive.google.com/uc?export=view&id=1RazLD_NUkrGrDCLTugJ5LflwjrQpHYfv" />
            </div>
          </div>
          </div>
          </div>
            
        )}
      </div>
    </div>
  );
}
<div className="relative w-full h-auto overflow-hidden hover:opacity-75 transition">
    <Link to="/Songkran">
    <img className="h-auto w-full rounded-lg" src="https://i0.wp.com/www.teckbeehang.com/wp-content/uploads/2023/06/skr-01.jpg?fit=960%2C720&ssl=1" alt=""/>
    <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
    <span class="text-gray-200/95 text-7xl font-bold"> + </span>
    </div>
    </Link>
</div>