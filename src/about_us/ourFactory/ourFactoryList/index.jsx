import { Link } from "react-router-dom";


export default function OurFactoryList() {


    return (
        <>
        <div id="cardContent" className={`card transition-opacity duration-300  bg-white`}>
        {/* Content of Cardtoggle */}
        <div className="relative flex flex-col h-screen w-full pt-16">
              <img className="h-76 w-3/5" src="https://drive.google.com/uc?export=view&id=1xxdfNMIwSAWQrVLnwQ4CU5JR13RJ40qd"/>
              <div className="flex justify-end pr-12">
                <img className="h-full w-3/5" src="https://drive.google.com/uc?export=view&id=18V4VW5FwMcyioBxnaQCHY3f7UsyQE_ED"/>
              </div>
              
              
  
            <div className="h-screen w-auto bg-white-200" id="factory-select">
            <div className="grid grid-flow-row-dense grid-cols-5 lg:gap-0 pb-8 ml-10 pl-24 md:gap-2 ml-2">
  
  
            <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
              <Link to='/thungSong'>
                  <img className="h-full w-auto rounded-lg" src="https://drive.google.com/uc?export=view&id=1orJcXqMsWi-KNZ9wM0Psu1EWsXWvZKTD" alt=""/>
              </Link>
            </div>
            <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
              <Link to='/yala'>
                  <img className="h-full w-auto rounded-lg" src="https://drive.google.com/uc?export=view&id=1vYgFkcAZKBW-0KaUrJ7YfNMJuIicXwt7" alt=""/>
              </Link>
            </div>
            <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
              <Link to='/narathiwat'>
                  <img className="h-full w-auto rounded-lg" src="https://drive.google.com/uc?export=view&id=1zQhi0wiCcSNDn3ocOOImfxXgYfoqIo7c" alt=""/>
              </Link>
            </div>
            <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
              <Link to='/pattani'>
                  <img className="h-full w-auto rounded-lg" src="https://drive.google.com/uc?export=view&id=1y3HekKl5d4RA8ndKVDn5IG3YpVTCAh5K" alt=""/>
              </Link>
            </div>
            <div className="h-72 w-auto overflow-hidden hover:opacity-75 transition">
              <Link to='/suratthani'>
                  <img className="h-full w-auto rounded-lg" src="https://drive.google.com/uc?export=view&id=1fzIjOZ1IZg3gXctRaZbi3ymC92Vm09DM" alt=""/>
              </Link>
            </div>
  
            </div>
            </div>
  
            </div>
        </div>
        </>
  
      );

}