import About from "./about";
import Product from "./product";
import Sustain from "./sustain";

export default function Dropdown(){
  return (

    // <div className="flex flex-row item-center justify-center mx-3"> 
    //  <img src="https://drive.google.com/uc?export=view&id=19G1fi2gEjUFi-D7qAsgk41EQQ6_-4gGr" className="h-12 w-12" />
    <div className="pl-16">
    {/* <div className=" rounded bg-gray-700 z-0"> */}
    <div className="relative rounded-full bg-gray-600/20">
    
    <div className="flex flex-row space-x-16 z-40">
      <About></About>
      <Product></Product>
      <Sustain></Sustain>
      
      </div>
      
    </div>


    </div>

  );

 
};