import React from "react";
import { Route, Routes } from 'react-router-dom'
// import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from "layouts";
import WorkOpputunity from "work_opp";
import Whistleblowing from "Whistleblowing";


import ScrollToTopButton from "components/scroll_up";

import ManagementTeam from "about_us/management";
import PolicyPage from "sustainability/policy_page";
import ContactUS from "contact_us";
import TBHstaff from "thbstaff";
import Songkran from "activity_board/songkran";
import HappyWork from "activity_board/happyWorkplace";
import QCC from "activity_board/qcctrain";
import Efforts from "activity_board/efforts";
import ThungSong from "activity_board/thungSong5S";
import ThungSong21 from "activity_board/thungsong21";
import NewYear23 from "activity_board/newyear23";
import NewYear22 from "activity_board/newyear22";
import BestSupplier from "activity_board/bestsupply";

import GREENnav from "components/navbar/greenNav";

const App = () => {

  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    
    

    <div>

      {!isRootPath && (
                <GREENnav></GREENnav>
      )}

      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='/work_opp' element={<WorkOpputunity/>}/>
        <Route path='/Whistleblowing' element={<Whistleblowing/>}/>
        <Route path='/songkran' element={<Songkran/>}/>
        <Route path='/HappyWork' element={<HappyWork/>}/>
        <Route path='/qcctrain' element={<QCC/>}/>
        <Route path='/efforts' element={<Efforts/>}/>
        <Route path='/thungSong5S' element={<ThungSong/>}/>
        <Route path='/thungsong21' element={<ThungSong21/>}/>
        <Route path='/newyear23' element={<NewYear23/>}/>
        <Route path='/newyear22' element={<NewYear22/>}/>
        <Route path='/bestsupply' element={<BestSupplier/>}/>
        <Route path='/management' element={<ManagementTeam/>}/>
        <Route path='/policy_page' element={<PolicyPage/>}/>
        <Route path='/contact_us' element={<ContactUS/>}/>
        <Route path='/tbhstaff' element={<TBHstaff/>}/>
      </Routes>

      <nav className="bottom-0 fixed right-0 z-10">
          <ScrollToTopButton></ScrollToTopButton>
      </nav>
      
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