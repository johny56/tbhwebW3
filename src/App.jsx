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
import CorevaluePage from "about_us/core_value/corevaluepage";

import Gcg from "activity_board/2023/gcg";
import KaizenAward from "activity_board/2023/kaizen";
import Songkran from "activity_board/2023/songkran";
import HappyWork from "activity_board/2023/happyWorkplace";
import QCC from "activity_board/2023/qcctrain";
import Efforts from "activity_board/2023/efforts";
import NewYear23 from "activity_board/2023/newyear23";

import ThungSong from "activity_board/2022/thungSong5S";
import NewYear22 from "activity_board/2022/newyear22";
import BestSupplier from "activity_board/2022/bestsupply";
import Bigcleaning from "activity_board/2022/bigcleaning";

import ThungSong21 from "activity_board/2021/thungsong21";
import Technical from "activity_board/2021/technical";
import Chnewyear21 from "activity_board/2021/chnewyear21";
import Leanproduction from "activity_board/2021/leanproduction";

import Isotrainning from "activity_board/2020/iso";
import Newyear20 from "activity_board/2020/newyear20";
import Softskill from "activity_board/2020/softskill";
import FireEscapetraining from "activity_board/2020/fireescape";
import Merrit from "activity_board/2020/merrit";
import Nrproperty from "activity_board/2020/nr";
import Ergonomic from "activity_board/2020/ergonomic";
import Healthbody from "activity_board/2020/healthbody";

import Activity_board from "activity_board";
import Award from "about_us/award";
import AwardContent from "about_us/award/awardContent";
import CompanyStructure from "about_us/company_structure";
import GREENnav from "components/navbar/greenNav";
import OurFACTORY from "about_us/ourFactory";
import OurFactoryList from "about_us/ourFactory/ourFactoryList";
import Productpage from "our_product";

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
  // const isAward = location.pathname === "/award";
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
        <Route path='/management' element={<ManagementTeam/>}/>
        <Route path='/policy_page' element={<PolicyPage/>}/>
        <Route path='/contact_us' element={<ContactUS/>}/>
        <Route path='/tbhstaff' element={<TBHstaff/>}/>
        <Route path='/company_structure' element={<CompanyStructure/>}/>
        <Route path='/award' element={<Award/>}/>
        <Route path='/awardContent' element={<AwardContent/>}/>
        <Route path='/CorevaluePage' element={<CorevaluePage/>}/>
        <Route path='/productpage' element={<Productpage/>}/>
        {/* factory path */}
        <Route path='/ourFactory' element={<OurFACTORY/>}/>
        <Route path='/ourFactoryList' element={<OurFactoryList/>}/>
        <Route path ="/thungSong" element={<ThungSongfac/>}/>
        <Route path ="/yala" element={<YaLafac/>}/>
        <Route path ="/narathiwat" element={<NarathiWatfac/>}/>
        <Route path ="/pattani" element={<PatTanifac/>}/>
        <Route path ="/suratthani" element={<SuratThanifac/>}/>
        {/* activity path */}
        {/* 2023 */}
        <Route path='/Gcg' element={<Gcg/>}/>
        <Route path='/KaizenAward' element={<KaizenAward/>}/>
        <Route path='/songkran' element={<Songkran/>}/>
        <Route path='/HappyWork' element={<HappyWork/>}/>
        <Route path='/qcctrain' element={<QCC/>}/>
        <Route path='/efforts' element={<Efforts/>}/>
        <Route path='/newyear23' element={<NewYear23/>}/>
        {/* 2022 */}
        <Route path='/thungSong5S' element={<ThungSong/>}/>
        <Route path='/bestsupply' element={<BestSupplier/>}/>
        <Route path='/Bigcleaning' element={<Bigcleaning/>}/>
        <Route path='/newyear22' element={<NewYear22/>}/>
        {/* 2021 */}
        <Route path='/Technical' element={<Technical/>}/>
        <Route path='/Chnewyear21' element={<Chnewyear21/>}/>
        <Route path='/Leanproduction' element={<Leanproduction/>}/>
        <Route path='/thungsong21' element={<ThungSong21/>}/>
        {/* 2020 */}
        <Route path='/Isotraining' element={<Isotrainning/>}/>
        <Route path='/Newyear20' element={<Newyear20/>}/>
        <Route path='/Softskill' element={<Softskill/>}/>
        <Route path='/Fireescape' element={<FireEscapetraining/>}/>
        <Route path='/Merritpage' element={<Merrit/>}/>
        <Route path='/Nrtraining' element={<Nrproperty/>}/>
        <Route path='/Ergonomic' element={<Ergonomic/>}/>
        <Route path='/Healthbody' element={<Healthbody/>}/>

        <Route path ="/activity_board" element={<Activity_board/>}/>
      </Routes>


      <nav className="bottom-0 fixed right-0 z-10">
          <ScrollToTopButton/>
      </nav>
      
    </div>

    
    
  );
};

export default App;
