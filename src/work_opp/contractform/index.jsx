import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

const SERVICE_ID = "service_bfyn9o7";
const TEMPLATE_ID = "template_5vz26qg";
const PUBLIC_KEY = "HFjSoJWqqoZJCp-fb";


const ContactForm = () => {

    const [checkBoxValue,setcheckBoxValue] = useState(false);

    const IsCheck = () =>{
        if(checkBoxValue===true){
            setcheckBoxValue(false);
            console.log(checkBoxValue);
        }else{
            setcheckBoxValue(true);
            console.log(checkBoxValue);
        }
    }

    // const handleOnSubmit = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
    //       .then((result) => {
    //         console.log(result.text);
    //         alert('Message Sent Successfully')
    //       }, (error) => {
    //         console.log(error.text);
    //         alert('Something went wrong!')
    //       });
    //     e.target.reset()
    //   };
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        
        // Check file sizes
        const fileInputs = e.target.querySelectorAll('input[type="file"]');
        let filesValid = true;
        fileInputs.forEach(input => {
          const files = input.files;
          if (files.length > 0 && files[0].size > 50 * 1024) { // Check if file size exceeds 50KB
            alert('Please upload files smaller than 50KB.');
            filesValid = false;
          }
        });
      
        if (!filesValid) return;
      
        // Proceed with sending the form data if files are valid
        try {
          const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
          console.log(result.text);
          alert('Message Sent Successfully');
          e.target.reset();
        } catch (error) {
          console.error(error.text);
          alert('Something went wrong!');
        }
      };
      
     return (
        <div className='h-full w-full'>
         <form className="absolute top-32 left-36 h-5/6 w-5/6 bg-white overflow-y-scroll formContainer" onSubmit={handleOnSubmit} enctype="multipart/form-data">
                    
                    <h1 className="relative text-4xl font-bold mt-8 h-8 w-auto ml-12 font-sans">แบบฟอร์มสมัครงาน</h1>
                    
                    <div className="relative flex flex-row">
                        <p className="text-xl ml-10 font-bold mt-10 h-8 w-auto font-mono">ตำแหน่ง: </p>
                        <div className="w-5/6 ml-4 flex items-center border-b border-gray-900 py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-gray-700 text-2xl mt-6 font-normal mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Document Staff(CDS)" name="position" id="position"/>
                        </div>
                    </div>

                    <div className="relative flex h-auto w-full flex-col">
                        <div className="flex flex-row w-full">
                            <div className="relative flex w-full">
                                <p className="text-xl font-bold mt-10 h-8 w-auto ml-12 font-mono">ชื่อสกุล: </p>
                                <div className="w-3/4 ml-4 flex items-center border-b border-gray-900 py-2">
                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 text-2xl mt-6 font-normal mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="ตัวอย่าง สมชาย ใจดี" id="from_name" name="from_name" required/>
                                </div>
                            </div>
                            <div className="relative flex w-full">
                                <p className="text-xl font-bold mt-10 ml-10 h-8 w-auto font-mono">อีเมล:  </p>
                                <div className="w-4/6 ml-4 flex items-center border-b border-gray-900 py-2">
                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 text-2xl mt-6 font-normal mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="ตัวอย่าง somchai@kline.co.th" type="email" id="from_email" name="from_email" required/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row w-full">
                            <div className="relative flex flex-row w-full">
                                <p className="text-xl font-bold mt-10 h-8 w-auto ml-20 font-mono">โทร: </p>
                                <div className="w-3/4 ml-4 flex items-center border-b border-gray-900 py-2">
                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 text-2xl mt-6 font-normal mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="ตัวอย่าง +6681-234-5678" id="phone_number" name="phone_number" required/>
                                </div>
                            </div>
                            <div className="relative flex flex-row w-full">
                                <p className="text-xl font-bold mt-10 h-8 w-auto font-mono">ไอดี Line: </p>
                                <div className="w-4/6 ml-2 flex items-center border-b border-gray-900 py-2">
                                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 text-2xl mt-6 font-normal mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="" id="line_id" name="line_id"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex flex-col">
                        <p className="text-xl font-bold mt-12 h-8 w-auto ml-10 font-mono">อัพโหลดประวัติส่วนตัว</p>
                        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-white ml-10 mt-1" for="file_input">.pdf, .doc, .docx ขนาดไม่เกิน 5 mb:
                            <div className="w-5/6 flex items-center border-b border-gray-900 py-1"></div>
                                <div className='py-2'>
                                    <input className="block w-64 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer mt-4 ml-10 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" name="file_input" id="file_input" type="file"/>
                                    <input className="block w-64 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer mt-4 ml-10 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" name="file_input" id="file_input" type="file"/>
                                    <input className="block w-64 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer mt-4 ml-10 bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" name="file_input" id="file_input" type="file"/>
                                </div>
                        </label>
                    </div>

                    <div className="relative flex flex-col h-96 w-full bg-white">

                        <div className="relative flex flex-col pt-4">
                            <label className="text-xl font-bold ml-12">ข้อความ:</label>
                            <div className="w-5/6 ml-12 flex items-center border-b border-gray-900 py-2">
                                <input className="appearance-none bg-transparent border-none h-48 w-full text-gray-700 text-2xl mt-6 font-normal mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="" name="message" required/>
                            </div>
                        </div>

                        <div className="flex flex-col p-4">
                            <p className="text-xm pt-2 w-3/4 ml-8">ข้อมูลส่ววนบุคคลของคุณจะถูกจัดเก็บตาม
                            <Link to="/policy_page" className="text-xm underline underline-offset-1 text-red-600 inline">"นโยบายความเป็นส่วนตัว"</Link> ของเราโปรดศึกษานโยบายอย่างละเอียดก่อนกดส่ง</p>
                            <div className="flex flex-row ml-8 mb-4 pt-2">
                                <label className="flex items-center space-x-2" onClick={IsCheck}>
                                    <input id="checkbox" type="checkbox" value="1" className="form-checkbox text-blue-500 h-4 w-4" />
                                   
                                </label>
                                <p className="text-xm w-3/4 ml-4 font-bold">ฉันเข้าใจและยอมรับนโยบายคามเป็นส่วนตัวของบริษัท</p>
                            </div>
                            <button  type='submit' className={checkBoxValue?'absolute bottom-5 right-56 mt-2 h-16 w-28 text-white font-bold rounded-full shadow-lg bg-green-700 formButton hover:bg-green-900'
                                                :'absolute bottom-5 right-56 mt-2 h-16 w-28 text-white font-bold rounded-full shadow-lg bg-gray-300'}
                                // onClick={handleOnSubmit}
                                disabled={!checkBoxValue}>submit
                            </button>
                        </div>
                        
                    </div>
            </form>
            </div>
    )
}


export default ContactForm;
         {/* <div className="pt-32 pl-32" style={{width:'100vw', height: '100vh', display:'flex'}}>
             <form class="formContainer" onSubmit={handleOnSubmit}>
                 <h2>Send me a message. Let's have a chat!</h2>
                 <div class="formElement">
                     <label for="from_name">Name</label>
                     <input type="text" id="from_name" name="from_name" placeholder="Your name.." required />
                 </div>

                 <div class="formElement">
                     <label>E-mail</label>
                     <input type="email" id="from_email" name="from_email" placeholder="Your email.." required />
                 </div>

                 <div class="formElement">
                     <label for="message">Message</label>
                     <textarea name="message" rows="8" cols="30" placeholder="Your message.." required />
                 </div>
                 <button type='submit' className='formButton'>Submit</button>
             </form>
         </div> */}