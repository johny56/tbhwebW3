import Navbar from "components/navbar";
import Card from "about_us/history";


const Header = () => {

  return (
    
      
        // <div className="bg-transition h-max z-40">

          <header className="bg-green-700 scroll top-0 w-full shadow-md z-0">
              <nav className="sticky top-0 z-40">
                  <Navbar></Navbar>
              </nav>
            <div className="bg-cover h-screen bg-[url(https://drive.google.com/uc?export=view&id=1w2SwHnIUEbKgPLefMC8YPxEH4kzJX0QB)] bg-no-repeat z-10">
            

              <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed z-20">
                  <div class="flex h-full items-end py-18 justify-center">
                  <div class="text-white m-8">
                      <h2 class="my-2 text-7xl font-semibold"> TECK BEE HANG CO.,LTD.</h2>
                      <h4 class="my-2 text-4xl font-semibold"> NATURAL RUBBER PROCESSOR AND EXPORTER</h4>
                  
                  </div>
                  </div>
              
              </div>
            </div>
            <body>

                <div className="p-1 m-1" id="core_value">
                    <Card></Card>
                </div>
                
                <div className="p-1 m-1" id="product">
                    <Card></Card>
                </div>

            </body>
            
              
          </header>
            
        // </div>
    
  );
};

export default Header;


// make change url homepage-01 https://drive.google.com/file/d/1w2SwHnIUEbKgPLefMC8YPxEH4kzJX0QB/view?usp=drive_link



        