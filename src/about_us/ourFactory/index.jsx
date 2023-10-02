import React, { useState } from "react";
import Navbar from "components/navbar";
import { Link } from "react-router-dom";


export default function OurFACTORY() {

  const [isCardVisible, setCardVisibility] = useState(false);

  const toggleCard = () => {
          // Toggle the visibility state
          console.log('Toggle card function called');
  console.log('isCardVisible:', isCardVisible);
      setCardVisibility(!isCardVisible);

      // Scroll to the card content when it becomes visible
      if (!isCardVisible) {
        const cardElement = document.getElementById('cardContent');
        if (cardElement) {
          cardElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
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
            onClick={toggleCard}
          >
          <img className="h-28 w-auto hover:bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" src="https://drive.google.com/uc?export=view&id=1cy8XQkDEIFEhsay-zZ7p7uNGCh_zwwzf"/>
          </button>
        </div>

        <div id="cardContent"
          className={`card transition-opacity duration-300 mt-32 ${
          isCardVisible ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'
        }`
      }
      >
        

          <div className="relative flex flex-col h-full w-full bg-white-200 z-0">
            <img className="h-76 w-3/5 pt-12" src="https://drive.google.com/uc?export=view&id=1xxdfNMIwSAWQrVLnwQ4CU5JR13RJ40qd"/>
            <div className="flex justify-end pr-12">
              <img className="h-full w-3/5" src="https://drive.google.com/uc?export=view&id=18V4VW5FwMcyioBxnaQCHY3f7UsyQE_ED"/>
            </div>
            
            

          <div className="h-full w-auto bg-white-200">
          <div className="grid grid-flow-row-dense grid-cols-5 gap-4 m-2 p-2 pt-12 ml-16">


           <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
            <Link to='/thungSong'>
                <img className="h-full w-auto rounded-lg" src="https://drive.google.com/uc?export=view&id=1orJcXqMsWi-KNZ9wM0Psu1EWsXWvZKTD" alt=""/>
            </Link>
          </div>


            <div className="h-72 w-auto ">
              <img className="h-full w-auto rounded-lg " src="https://drive.google.com/uc?export=view&id=1vYgFkcAZKBW-0KaUrJ7YfNMJuIicXwt7" />
            </div>
            <div className="h-72 w-auto ">
              <img className="h-full w-auto rounded-lg " src="https://drive.google.com/uc?export=view&id=1eejgxsNbI5bTRXm0YQBb8vMUKxru8mLU" />
            </div>
            <div className="h-72 w-auto ">
              <img className="h-full w-auto rounded-lg " src="https://drive.google.com/uc?export=view&id=1y3HekKl5d4RA8ndKVDn5IG3YpVTCAh5K" />
            </div>
            <div className="h-72 w-auto ">
              <img className="h-full w-auto rounded-lg " src="https://drive.google.com/uc?export=view&id=1fzIjOZ1IZg3gXctRaZbi3ymC92Vm09DM" />
            </div>
          </div>
          </div>
           </div>

      </div>
      </div>
    </div>
  );
}

