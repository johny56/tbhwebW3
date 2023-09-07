import React from "react";
import { Route, Routes } from 'react-router-dom'
import Layout from "layouts";
import WorkOpputunity from "work_opp";
import Whistleblowing from "Whistleblowing";

import Logo from "components/navbar/logo";
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
        <Route path='/songkran' element={<Songkran/>}/>
        <Route path='/HappyWork' element={<HappyWork/>}/>
        <Route path='/qcctrain' element={<QCC/>}/>
        <Route path='/efforts' element={<Efforts/>}/>
        <Route path='/thungSong5S' element={<ThungSong/>}/>
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