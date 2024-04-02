// import Forum from "./emailforum";
import React, { useRef } from 'react';
import { useState } from "react";
import img from "./asset/Work Opputunity.png";
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

// import StyledCheckbox from "../Whistleblowing/checkbox";

export const imageBg = img;


export default function WorkOpputunity(){

    // <script
    // type="text/javascript"
    // src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
    // </script>
    // emailjs.init({
    //     publicKey: 'HFjSoJWqqoZJCp-fb',
    // });

    const [clickState, setclickState] = useState(0);

    const [checkBoxValue, setcheckBoxValue] = useState(false);

    const IsCheck = () =>{
        if(checkBoxValue===true){
            setcheckBoxValue(false);
            console.log(checkBoxValue);
        }else{
            setcheckBoxValue(true);
            console.log(checkBoxValue);
        }
    }

    const form = useRef();

    const handleClick = () =>{
        if(clickState === 0){
            setclickState(clickState+1);
        }
        else{
            setclickState(clickState-1);
        }
        console.log(clickState);

    }


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_bfyn9o7', 'template_5vz26qg', form.current, {
            publicKey: 'HFjSoJWqqoZJCp-fb',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    if(clickState === 0){
    return (

        <div>
            <div className="relative h-screen w-full overflow-hidden bg-cover z-0 bg-white">
                {/* <div className="relative bg-cover h-full z-10"> */}
                <div className="absolute h-full w-full pt-24">
                    <img className="h-full w-full" src={imageBg} alt=""/>
                </div>            

                    <div className="flex relative h-full items-center justify-center z-20">
                    <div className=" text-green-900 text-center pt-28">
                        <h2 className="my-2 text-7xl font-semibold"> WORK WITH US</h2>
                        <h4 className="my-2 text-4xl font-semibold"> BECOME ONE OF OUR HEROES</h4>
                    
                    </div>
                    </div>

                 
            
            </div>

            <div className="relative flex flex-col h-full shadow-md pt-20 z-10 sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Job title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Unti
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qualification
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Apply
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Post Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETAILS</a>
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={handleClick} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">APPLY NOW</button>
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                2
                            </th>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETAILS</a>
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={handleClick} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">APPLY NOW</button>
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                3
                            </th>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETAILS</a> */}
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">APPLY NOW</a> */}
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                4
                            </th>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETAILS</a> */}
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">APPLY NOW</a> */}
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                5
                            </th>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETAILS</a> */}
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">APPLY NOW</a> */}
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                6
                            </th>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">DETAILS</a> */}
                            </td>
                            <td className="px-6 py-4">
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">APPLY NOW</a> */}
                            </td>
                            <td className="px-6 py-4">
                                ...
                            </td>
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>
                


            

            
            
            <footer className="bg-white text-black py-8 m-8">
            <div className="container mx-auto flex flex-wrap justify-center text-center">
                <div className="w-full md:w-1/3 px-4 mb-6">
                </div>
                <div className="w-full md:w-1/3 px-4 mb-6">
                <a>For futher information, please contact us</a>
                <br></br>
                <a>HR Department at Teck Bee Hang Co,Ltd(Head office)</a>
                <br></br>
                <a>157 Niphat Uthut 2 Road Hatyai Songkhla 90110</a>
                <br></br>
                <a>Email: HRD@teckbeehang.com</a>
                <br></br>
                <a>Call us:074-xxx-xxx Ext 20xx</a>
                </div>
                <div className="w-full md:w-1/3 px-4 mb-6">
                </div>
            </div>
            </footer>

            </div>
      



        );

    }
    else{
        return(
            <div className="relative h-screen w-full bg-gray-800/10">
                <button
                    className="z-30 absolute top-32 right-40 h-12 w-12 text-center mt-4 border-2 right-5 text-red-100 border-4 text-extrabold cursor-pointer text-2xl rounded-full z-30 bg-red-400 hover:bg-red-700"
                    onClick={handleClick}
                    >
                        X
                </button>
                <form className="absolute top-32 left-36 h-5/6 w-5/6 bg-white overflow-y-scroll" ref={form} onSubmit={sendEmail}>
                    
                    <h1 className="relative text-4xl font-bold mt-8 h-8 w-auto ml-12 font-sans">แบบฟอร์มสมัครงาน</h1>
                    
                    <div className="relative flex flex-row">
                        <p className="text-xl ml-10 font-bold mt-10 h-8 w-auto font-mono">ตำแหน่ง: </p>
                        <div className="w-5/6 ml-4 flex items-center border-b border-gray-900 py-2">
                            <input class="appearance-none bg-transparent border-none w-full text-gray-700 text-2xl mt-6 font-normal mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Document Staff(CDS)" aria-label="Position"/>
                        </div>
                    </div>

                    <div className="relative flex h-auto w-full flex-col">
                        <div className="flex flex-row w-full">
                            <div className="relative flex w-full">
                                <p className="text-xl font-bold mt-10 h-8 w-auto ml-12 font-mono">ชื่อสกุล: </p>
                                <div className="w-3/4 ml-4 flex items-center border-b border-gray-900 py-2">
                                    <input class="appearance-none bg-transparent border-none w-full text-gray-700 text-2xl mt-6 font-normal mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="ตัวอย่าง สมชาย ใจดี" aria-label="Full name"/>
                                </div>
                            </div>
                            <div className="relative flex w-full">
                                <p className="text-xl font-bold mt-10 ml-10 h-8 w-auto font-mono">อีเมล:  </p>
                                <div className="w-4/6 ml-4 flex items-center border-b border-gray-900 py-2">
                                    <input class="appearance-none bg-transparent border-none w-full text-gray-700 text-2xl mt-6 font-normal mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="ตัวอย่าง somchai@kline.co.th" aria-label="e-mail"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full">
                            <div className="relative flex flex-row w-full">
                                <p className="text-xl font-bold mt-10 h-8 w-auto ml-20 font-mono">โทร: </p>
                                <div className="w-3/4 ml-4 flex items-center border-b border-gray-900 py-2">
                                    <input class="appearance-none bg-transparent border-none w-full text-gray-700 text-2xl mt-6 font-normal mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="ตัวอย่าง +6681-234-5678" aria-label="Phone number"/>
                                </div>
                            </div>
                            <div className="relative flex flex-row w-full">
                                <p className="text-xl font-bold mt-10 h-8 w-auto font-mono">ไอดี Line: </p>
                                <div className="w-4/6 ml-2 flex items-center border-b border-gray-900 py-2">
                                    <input class="appearance-none bg-transparent border-none w-full text-gray-700 text-2xl mt-6 font-normal mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="" aria-label="Line id"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col">
                        <p className="text-xl font-bold mt-12 h-8 w-auto ml-10 font-mono">อัพโหลดประวัติส่วนตัว</p>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white ml-10 mt-1" for="file_input">.pdf, .doc, .docx ขนาดไม่เกิน 5 mb:
                            <div className="w-5/6 flex items-center border-b border-gray-900 py-1"></div>
                                <div className='py-2'>
                                    <input className="block w-64 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer mt-4 ml-10 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
                                    <input className="block w-64 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer mt-4 ml-10 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
                                    <input className="block w-64 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer mt-4 ml-10 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
                                </div>
                        </label>
                    </div>

                    <div className="relative flex flex-col h-96 w-full bg-white">

                        <div className="relative flex flex-col pt-4">
                            <label className="text-xl font-bold ml-12">ข้อความ:</label>
                            <div className="w-5/6 ml-12 flex items-center border-b border-gray-900 py-2">
                                <input class="appearance-none bg-transparent border-none h-48 w-full text-gray-700 text-2xl mt-6 font-normal mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="" aria-label="Line id"/>
                            </div>
                        </div>

                        <div className="flex flex-col p-4">
                            <p className="text-xm pt-2 w-3/4 ml-8">ข้อมูลส่ววนบุคคลของคุณจะถูกจัดเก็บตาม
                            <Link to="/policy_page" className="text-xm underline underline-offset-1 text-red-600 inline">"นโยบายความเป็นส่วนตัว"</Link> ของเราโปรดศึกษานโยบายอย่างละเอียดก่อนกดส่ง</p>
                            <div className="flex flex-row ml-8 mb-4 pt-2">
                                {/* <StyledCheckbox onClick={IsCheck}></StyledCheckbox> */}
                                <label className="flex items-center space-x-2" onClick={IsCheck}>
                                    <input id="checkbox" type="checkbox" value="1" className="form-checkbox text-blue-500 h-4 w-4" />
                                    {/* <span>{label}</span> */}
                                </label>
                                <p className="text-xm w-3/4 ml-4 font-bold">ฉันเข้าใจและยอมรับนโยบายคามเป็นส่วนตัวของบริษัท</p>
                            </div>
                            {/* <button className="" </button> */}
                            <button className={checkBoxValue?'absolute bottom-5 right-56 mt-2 h-16 w-28 text-white font-bold rounded-full shadow-lg bg-green-700 hover:bg-green-900'
                                                :'absolute bottom-5 right-56 mt-2 h-16 w-28 text-white font-bold rounded-full shadow-lg bg-gray-300'}
                                onClick={sendEmail}
                                disabled={!checkBoxValue}>submit
                            </button>
                        </div>
                        
                    </div>
                </form>

            </div>
        );
    }
}
