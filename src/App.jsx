import React from "react";
import { Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import Layout from "layouts";
import WorkOpputunity from "work_opp";
import Whistleblowing from "Whistleblowing";


import ScrollToTopButton from "components/scroll_upButton";

import ManagementTeam from "about_us/management";
import PolicyPage from "sustainability/policy_page";
import ContactUS from "contact_us";
import TBHstaff from "thbstaff";

import Gcg from "activity_board/2023/gcg";
import KaizenAward from "activity_board/2023/kaizen";
import Songkran from "activity_board/2023/songkran";
import HappyWork from "activity_board/2023/happyWorkplace";
import QCC from "activity_board/2023/qcctrain";
import Efforts from "activity_board/2023/efforts";
import ThungSong from "activity_board/2022/thungSong5S";
import ThungSong21 from "activity_board/2021/thungsong21";
import NewYear23 from "activity_board/2023/newyear23";
import NewYear22 from "activity_board/2022/newyear22";
import BestSupplier from "activity_board/2022/bestsupply";
import Bigcleaning from "activity_board/2022/bigcleaning";
import Technical from "activity_board/2021/technical";
import Chnewyear21 from "activity_board/2021/chnewyear21";
import Leanproduction from "activity_board/2021/leanproduction";
import Activity_board from "activity_board";

import CompanyStructure from "about_us/company_structure";
import GREENnav from "components/navbar/greenNav";
// import Navbar from "components/navbar";
import OurFACTORY from "about_us/ourFactory";

import ScrollToTopOnPageChange from "components/scroll_up";
import ThungSongfac from "about_us/ourFactory/thungSong";
import YaLafac from "about_us/ourFactory/yala";
import NarathiWatfac from "about_us/ourFactory/narathiwat";
import PatTanifac from "about_us/ourFactory/pattani";
import SuratThanifac from "about_us/ourFactory/suratthani";



const App = () => {

  const location = useLocation();
  const isRootPath = location.pathname === "/";
  // const isManagementPath = location.pathname === "/management";
  const isFactoryPath = location.pathname === "/ourFactory";
  const isCompanyStructurePath = location.pathname === "/company_structure";
  // const isActivityBoard = location.pathname === "/activity_board";

  return (
    // && !isManagementPath
    <div>
      {!isRootPath && !isFactoryPath && !isCompanyStructurePath &&(
        <GREENnav></GREENnav>
      )}
      <ScrollToTopOnPageChange />

      <Routes>
        <Route path='/' element={<Layout/>} />
        <Route path='/work_opp' element={<WorkOpputunity/>}/>
        <Route path='/Whistleblowing' element={<Whistleblowing/>}/>
        <Route path='/Gcg' element={<Gcg/>}/>
        <Route path='/KaizenAward' element={<KaizenAward/>}/>
        <Route path='/songkran' element={<Songkran/>}/>
        <Route path='/HappyWork' element={<HappyWork/>}/>
        <Route path='/qcctrain' element={<QCC/>}/>
        <Route path='/efforts' element={<Efforts/>}/>
        <Route path='/thungSong5S' element={<ThungSong/>}/>
        <Route path='/thungsong21' element={<ThungSong21/>}/>
        <Route path='/Technical' element={<Technical/>}/>
        <Route path='/newyear23' element={<NewYear23/>}/>
        <Route path='/newyear22' element={<NewYear22/>}/>
        <Route path='/Chnewyear21' element={<Chnewyear21/>}/>
        <Route path='/Leanproduction' element={<Leanproduction/>}/>
        <Route path='/Bigcleaning' element={<Bigcleaning/>}/>
        <Route path='/bestsupply' element={<BestSupplier/>}/>
        <Route path='/management' element={<ManagementTeam/>}/>
        <Route path='/policy_page' element={<PolicyPage/>}/>
        <Route path='/contact_us' element={<ContactUS/>}/>
        <Route path='/tbhstaff' element={<TBHstaff/>}/>
        <Route path='/company_structure' element={<CompanyStructure/>}/>
        <Route path='/ourFactory' element={<OurFACTORY/>}/>
        <Route path ="/thungSong" element={<ThungSongfac/>}/>
        <Route path ="/yala" element={<YaLafac/>}/>
        <Route path ="/narathiwat" element={<NarathiWatfac/>}/>
        <Route path ="/pattani" element={<PatTanifac/>}/>
        <Route path ="/suratthani" element={<SuratThanifac/>}/>
        <Route path ="/activity_board" element={<Activity_board/>}/>
      </Routes>


      <nav className="bottom-0 fixed right-0 z-10">
          <ScrollToTopButton/>
      </nav>
      
    </div>

    
    
  );
};

export default App;
