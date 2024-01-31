import React, { useState } from "react";

function ProductCard({ prop}) {

  const [editable, setEditable] = useState(false);
  const handleClick = () => {
    setEditable(!editable);
  };

  

  return (
    <div
      className="
        flex
        justify-center
        text-3xl md:text-7xl 
        p-6 w-50 h-50 bg-slate-300 md:p-10 md:w-60 md:h-60 md:bg-green-300
        items-center
        drop-shadow-md	
        rounded-md" 
    >
      <div onClick={handleClick} className="flex">
        <div className={editable ? 'opacity-0' : 'opacity-800'}>{prop}</div>
        <div className="text-sm cursor-pointer text-gray-500">{editable ? 'close | update' : 'edit'}</div>

        <input className="text-sm w-15 bg-slate-100" type={!editable && "hidden"} value={prop} />
      </div>
    </div>
  );
}

export default ProductCard;

// import React, { useState } from "react";

// function ProductCard({ prop, isMiddle }) {
//   const [editable, setEditable] = useState(false);

//   const handleClick = () => {
//     setEditable(!editable);
//   };

//   return (
//     <div
//       className={`flex justify-center items-center p-6 w-56 h-56 bg-slate-300 md:p-10 md:w-64 md:h-64 md:bg-green-300 drop-shadow-md rounded-md ${
//         isMiddle ? 'w-96 h-96 bg-blue-300' : '' // Conditionally apply larger size for the middle card
//       }`}
//     >
//       <div onClick={handleClick} className="flex">
//         <div className={editable ? "opacity-0" : "opacity-800"}>{prop}</div>
//         <div className="text-sm cursor-pointer text-gray-500">
//           {editable ? "close | update" : "edit"}
//         </div>
//         <input
//           className="text-sm w-16 bg-slate-100"
//           type={!editable && "hidden"}
//           value={prop}
//         />
//       </div>
//     </div>
    
//   );
// }

// export default ProductCard;



