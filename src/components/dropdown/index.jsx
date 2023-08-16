import About from "./about";
import Product from "./product";
import Sustain from "./sustain";

export default function Dropdown(){
  return (

    <div className="flex flex-row item-center justify-center space-x-16">
      <About></About>
      <Product></Product>
      <Sustain></Sustain>
    </div>

  );

 
};