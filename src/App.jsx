import React from "react";
import { Route, Routes } from 'react-router-dom'
import Layout from "layouts";
import WorkOpputunity from "work_opp";

import Navbar from "components/navbar";
import Logo from "components/navbar/logo";

const App = () => {


  return (
    
    

    <div>
      <nav className="flex flex-row bg-transition fixed top-0 w-full z-40">
          <Logo></Logo>
          <Navbar></Navbar>
      </nav>

      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='/work_opp' element={<WorkOpputunity/>}/>
      </Routes>
    </div>

    
    
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