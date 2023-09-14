import React, { useState } from 'react';

export default function ContactUS() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div>
      {/* <div className="flex flex-col h-16 bg-[#E6DCC6]"></div> */}
      <div className="h-full pt-24 bg-gray-200">
        <div className="flex flex-row items-start p-2">
          
          <img
            className="h-min-screen w-auto"
            src="https://drive.google.com/uc?export=view&id=14qtecVcjCjvO8X279QUqg2mvMvUWLjx4"
            alt=""
          />
          <div className="flex flex-col h-full w-full bg-cover bg-gray-100 relative z-10">
           <h1 className="pl-32 m-4 uppercase text-3xl font-sans font-noto-sans-thai">contact us</h1>
            <div className="w-full pt-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index}>
                  <button
                    aria-current="true"
                    type="button"
                    className={`block w-full cursor-pointer rounded-lg bg-primary-100 p-4 text-left text-primary-600 font-bold relative ${
                      activeDropdown === index ? 'mb-40' : '' // Add margin when active
                    }`}
                    onClick={() => toggleDropdown(index)}
                  >
                    {(() => {
                      switch (index) {
                        case 1:
                          return 'HEAD OFFICE HATYAI(HQ)';
                        case 2:
                          return 'THUNGSONG(H1)';
                        case 3:
                          return 'YALA(H2)';
                        case 4:
                          return 'NARATHIWAT(H6)';
                        case 5:
                          return 'PATTANI(H7)';
                        case 6:
                          return 'SURATTHANI(H8)';
                        default:
                          return '';
                      }
                    })()}
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg font-normal w-full">
                        <div className="p-4">
                          {(() => {
                            switch (index) {
                              case 1:
                                return (
                                  <p className="flex flex-col">
                                    157 Niphat Uthit 2 Road Hatyai, Songkhla
                                    90110
                                    <br />
                                    Tel:(66)7435 5307-9
                                    <br />
                                    Sales@teckbeehang.com
                                    <br />
                                    <button className="mt-4 w-1/6 bg-green-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
                                    Map
                                    </button>
                                  </p>
                                  
                                
                                );
                              case 2:
                                return (
                                  <p className="flex flex-col">
                                    64 Moo 3, Chamai, Thungsong, Nakhon Si
                                    Thammarat 80110
                                    <br />
                                    Tel:(66)7541 9131-2
                                    <br />
                                    <button className="mt-4 w-1/6 bg-green-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
                                    Map
                                    </button>
                                  </p>
                                );
                              case 3:
                                return (
                                  <p className="flex flex-col">
                                    A3 Moo 6, Thasab, Muang, Yala 95000
                                    <br />
                                    Tel:(66)7326 4027-9
                                    <br />
                                    <button className="mt-4 w-1/6 bg-green-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
                                    Map
                                    </button>
                                  </p>
                                );
                              case 4:
                                return (
                                  <p className="flex flex-col">
                                    101/2 Moo 11, Lumphu, Muang, Narathiwat
                                    96000
                                    <br />
                                    Tel:(66)7363 1863-9
                                    <br />
                                    <button className="mt-4 w-1/6 bg-green-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
                                    Map
                                    </button>
                                  </p>
                                );
                              case 5:
                                return (
                                  <p className="flex flex-col">
                                    229 Moo 4, Petchkasem Rd, Tuyong, Nongjik,
                                    Pattani 94170
                                    <br />
                                    Tel:(66)7343 7089-91
                                    <br />
                                    <button className="mt-4 w-1/6 bg-green-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
                                    Map
                                    </button>
                                  </p>
                                );
                              case 6:
                                return (
                                  <p className="flex flex-col">
                                    14/4 Moo 2, Surat-Phunphin Road, Wadpradu,
                                    Muang Suatthani 80000
                                    <br />
                                    Tel:(66)7720 0504-7
                                    <br />
                                    <button className="mt-4 w-1/6 bg-green-700 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
                                    Map
                                    </button>
                                  </p>
                                );
                              default:
                                return '';
                            }
                          })()}
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


