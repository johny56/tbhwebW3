import React from "react";
import { Route, Routes } from 'react-router-dom'
import Layout from "layouts";
import WorkOpputunity from "work_opp";
import Whistleblowing from "Whistleblowing";
import EventBoard from "activity_board";

import Logo from "components/navbar/logo";
import ScrollToTopButton from "components/scroll_up";

import ManagementTeam from "about_us/management";
import PolicyPage from "sustainability/policy_page";
import ContactUS from "contact_us";

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
        <Route path='/policy_page' element={<PolicyPage/>}/>
        <Route path='/contact_us' element={<ContactUS/>}/>
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