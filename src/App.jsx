import React from "react";
//import { Routes, Route, Navigate } from "react-router-dom";

import Header from "layouts/header";
import Body from "layouts/body";



const App = () => {


  return (
    <body>
      
        <Header></Header>
        <Body></Body>

        

    </body>
    
   
    
  );
};

export default App;

/*
<Routes>
      <Route path="homepage/*" element={<Homepage />} />
      <Route path="header/*" element={<Header />} />
      <Route path="/" element={<Navigate to="/homepage" replace />} />
    </Routes>
    */