import React from "react";
import { Link } from 'react-router-dom';

import img from "./asset/Ae  TBH Website.jpg";

export const image01 = img;

export default function TBHstaff() {
  return (
        <div className="bg-contain max-h-screen w-full bg-white overflow-clip pt-12">

          {/* <div className="relative bg-cover bg-center h-screen w-full bg-[url(https://drive.google.com/uc?export=view&id=1MU3qS_GfDb6KGM8mVVomyXZps0R2ljnU)] bg-no-repeat"> */}
          <div className="relative bg-cover bg-center h-screen w-full bg-no-repeat">
              <div className="absolute h-full w-full">
                <img className="h-full w-full" src={image01} alt=""/>
              </div>
              <div className="absolute top-56 bg-transition h-96 w-full">
                  <div className="flex flex-cols-3 pl-56 pt-4">

                  <Link to="https://login.microsoftonline.com/68d38eef-bd17-4611-bc0d-71ce5c8ad083/oauth2/authorize?client%5Fid=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&response%5Fmode=form%5Fpost&response%5Ftype=code%20id%5Ftoken&resource=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&scope=openid&nonce=3E67956FA5D755B5D709BF0C78B819749E16CEB0203503E3%2DD1BE23142312D045E97D4EAE3E71A422A876CC6DA884FD48B52C80EA27A03EFD&redirect%5Furi=https%3A%2F%2Fteckbeehang%2Esharepoint%2Ecom%2F%5Fforms%2Fdefault%2Easpx&state=OD0w&claims=%7B%22id%5Ftoken%22%3A%7B%22xms%5Fcc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&wsucxt=1&cobrandid=11bd8083%2D87e0%2D41b5%2Dbb78%2D0bc43c8a8e8a&client%2Drequest%2Did=f884f7a0%2Db04f%2D2000%2Dd9ae%2Da5f70456ff58&sso_reload=true">
                    <div className="flex bg-transition h-72 w-72 rounded-lg hover:bg-green-600/10 m-2 ml-24 mt-10">
                    </div>
                  </Link>
                  <Link to="https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=3da4ff90-20b2-f4a2-3261-8242920fab85&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&domain_hint=teckbeehang.com&nonce=638381174803717310.2034dba0-1f0c-40ed-8be6-414e3f0c4dc7&state=DYtBDsIwDMBa-Mtu3ZIlWnqZeEvaZoBYmYQQ-z452AdLjiGEq3NxIriCLJQpIwpnIEEhhHEG4lYUEm5QE4O1lIstiZGNPHGrEv0dpuPU6fYx3fv6tfoqZg9938d69OHX1tNK1-f-Bw">
                    <div className="flex bg-transition h-72 w-72 rounded-lg hover:bg-green-600/10 ml-56 m-2 mt-10">
                    </div>
                  </Link>
                  <Link to="http://hr-assessment.domaintbh.local/hrkpis/">
                    <div className="flex bg-transition h-72 w-72 rounded-lg hover:bg-green-600/10 ml-56 mt-10 m-2">
                    </div>
                  </Link>

                  </div>
              </div>

          </div>
          {/* Content for your fullscreen component */}
         </div>
  );
}
