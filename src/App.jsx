import React from "react";
import { Route, Routes } from 'react-router-dom'
import Layout from "layouts";
import WorkOpputunity from "work_opp";
import Whistleblowing from "Whistleblowing";
import EventBoard from "activity_board";

import Logo from "components/navbar/logo";
import ManagementTeam from "about_us/management";

const App = () => {


  return (
    
    

    <div>
      <nav className="flex flex-row bg-transition fixed top-0 w-full z-40">
          <Logo></Logo>
      </nav>

      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='/work_opp' element={<WorkOpputunity/>}/>
        <Route path='/Whistleblowing' element={<Whistleblowing/>}/>
        <Route path='/eventBoard' element={<EventBoard/>}/>
        <Route path='/management' element={<ManagementTeam/>}/>
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