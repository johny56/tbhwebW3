import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import bg from "../asset/Background Whistle Blower part 2.jpg";

const SERVICE_ID = "service_tqhv012";
const TEMPLATE_ID = "template_0hu49us";
const PUBLIC_KEY = "HFjSoJWqqoZJCp-fb";

export const background = bg;

function ComplaintForm() {
  const [selectedComplaintType, setSelectedComplaintType] = useState('');
  
  const [translateTH, settranslateTH] = useState(true);
  const form = useRef(null);

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
  const translate = () =>{
    if(translateTH===true){
      settranslateTH(false);
      console.log(translateTH);
    }else{
        settranslateTH(true);
        console.log(translateTH);
    }

  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    
    // Check file sizes
    const fileInputs = e.target.querySelectorAll('input[type="file_input"]');
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
  

    emailjs.send(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Reset form after submission if needed
        form.current.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleComplaintTypeChange = (e) => {
    setSelectedComplaintType(e.target.value);
  };


  {if(translateTH === true){
    return (
      <>
      <div>
           <div className='relative h-full w-full z-0'>
             <img className='h-full w-full bg-contain' src={background} alt=""/>
           </div>
  
  
       <div
             className={checkBoxValue?'absolute -top-6 h-6/7 w-3/4 right-0 left-56 bg-white rounded-lg border-4 border-green-500'
             :'absolute -top-6 h-6/7 w-3/4 right-0 left-56 bg-white rounded-lg border-4 border-gray-200'}>
  
         <div className='scale-95'>
  
        <div className='relative flex flex-row'>
          <h1 className='text-5xl font-extrabold pt-1 font-sans'>Complaint Form</h1>
          <div className='absolute top-0 right-0 h-8 w-6 bg-green-600/20 rounded-lg z-30'></div>
          <button onClick={translate} className='absolute right-0 top-0 bg-gray-200/70 text-xl font-extrabold text-gray-700 rounded-lg font-sans hover:text-gray-300 z-20'>TH/EN</button>
        </div>
        <form className='pt-4 ml-4' ref={form} onSubmit={handleOnSubmit}>
          <div className='flex flex-col'>
            <label className='font-medium text-xl'>Name - Surname</label>
            <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" type="text" name="user_name" required/>
            
            <label className='font-medium text-xl py-2'>Contact Number</label>
            <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" type="text" name="phone_number" required/>
            
            <label className='font-medium text-xl py-2'>Email</label>
            <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" type="email" id="from_email" name="from_email" required/>
            
            <label className='font-medium text-xl py-2'>Type of Complaint</label>
            <select className="mt-2 bg-gray-800/20 text-gray-900 text-sm block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedComplaintType}
              onChange={handleComplaintTypeChange}
            >
              <option value="">Choose a type of complaint</option>
              <option value="Fraud, Corruption and Bribery">Fraud, Corruption and Bribery</option>
              <option value="Conflict of Interest">Conflict of Interest</option>
              <option value="Money Laundering and Terrorism Financing">Money Laundering and Terrorism Financing</option>
              <option value="Human Rights">Human Rights</option>
              <option value="Anti Competitive, Fair Competition">Anti Competitive, Fair Competition</option>
              <option value="Information Security">Information Security</option>
              <option value="Grievance">Grievance</option>
            </select>
            
            <label className='font-medium text-xl py-2'>Complaint Topics</label>
            <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" name="topic" type="text"/>
            
            <label className='font-medium text-xl py-2'>Details</label>
            <input className="bg-gray-800/20 h-28 w-auto mx-1 pt-2" name="message" type="text"/>
            
            <label className='pt-2 font-medium text-xl pt-1'>Attachment (if any)</label>
            <label className="block text-normal font-medium text-gray-900 dark:text-white py-2" htmlFor="file_input">Upload file</label>
            <input className="block w-3/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
            
            <div className="flex flex-col p-4">
              <div className="flex flex-row ml-8 mb-4 pt-2">
                <label className="flex items-center space-x-2" onClick={IsCheck}>
                  <input id="checkbox" type="checkbox" value="1" className="form-checkbox text-blue-500 h-4 w-4"/>
                </label>
                <p className="text-xm w-3/4 ml-4 font-bold">I understand and accept the company's Privacy Policy.</p>
              </div>
              <p className="text-xm w-3/4 ml-8 indent-8">I have read and accepted the conditions as stated in Personal protection policy in all respects and give consent to the collection, use and disclosure of my personal Information according to the objective stated above.</p>
              
              <button type='submit' className={checkBoxValue?'absolute bottom-5 right-10 mt-2 h-16 w-32 text-white text-xl font-bold rounded-full shadow-lg bg-green-700 formButton hover:bg-green-900'
              :'absolute bottom-5 right-10 mt-2 h-16 w-32 text-white font-bold text-xl rounded-full shadow-lg bg-gray-300'}
              disabled={!checkBoxValue}>Submit</button>
            </div>
          </div>
        </form>
  
        </div>
  
      </div>
      </div>
  
        
      </>
      );
    }
  };
  
  {if(translateTH === false){
    return (
      <>
      <div>
           <div className='relative h-full w-full'>
             <img className='h-full w-full bg-contain overflow-y-scroll' src={background} alt=""/>
           </div>
  
  
       <div
             className={checkBoxValue?'absolute -top-6 h-6/7 w-3/4 right-0 left-56 bg-white rounded-lg z-30 border-4 border-green-500'
             :'absolute -top-6 h-6/7 w-3/4 right-0 left-56 bg-white rounded-lg z-30 border-4 border-gray-200'}>
  
         <div className='scale-95'>
  
        <div className='relative flex flex-row'>
          <h1 className='text-5xl font-extrabold pt-1 font-sans'>แบบฟอร์มการร้องเรียน</h1>
          <div className='absolute top-0 right-10 h-8 w-6 bg-green-600/20 rounded-lg z-30'></div>
          <button onClick={translate} className='absolute right-0 top-0 text-xl bg-gray-200/70 rounded-lg font-extrabold text-gray-700 font-sans hover:text-gray-300 z-30'>TH/EN</button>
        </div>
        <form className='pt-4 ml-4' ref={form} onSubmit={handleOnSubmit}>
          <div className='flex flex-col'>
            <label className='font-medium text-xl'>ชื่อจริง - นามสกุล</label>
            <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" type="text" name="user_name" required/>
            
            <label className='font-medium text-xl py-2'>เบอร์ติดต่อ</label>
            <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" type="text" name="phone_number" required/>
            
            <label className='font-medium text-xl py-2'>อีเมล์</label>
            <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" type="email" id="from_email" name="from_email" required/>
            
            <label className='font-medium text-xl py-2'>ประเภทการร้องเรียน</label>
            <select className="mt-2 bg-gray-800/20 text-gray-900 text-sm block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedComplaintType}
              onChange={handleComplaintTypeChange}
            >
              <option value="">เลือกประเภทการร้องเรียน</option>
              <option value="Fraud, Corruption and Bribery">การทุจริต คอร์รัปชั่น และสินบน</option>
              <option value="Conflict of Interest">ผลประโยชน์ทับซ้อน</option>
              <option value="Money Laundering and Terrorism Financing">การฟอกเงิน</option>
              <option value="Human Rights">สิทธิมนุษยชน</option>
              <option value="Anti Competitive, Fair Competition">การแข่งขันที่ไม่เป็นธรรม</option>
              <option value="Information Security">ความมั่นคงปลอดภัย IT</option>
              <option value="Grievance">การร้องทุกข์</option>
            </select>
            
            <label className='font-medium text-xl py-2'>หัวข้อเรื่องร้องเรียน</label>
            <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" name="topic" type="text"/>
            
            <label className='font-medium text-xl py-2'>รายละเอียด</label>
            <input className="bg-gray-800/20 h-28 w-auto mx-1 pt-2" name="message" type="text"/>
            
            <label className='pt-2 font-medium text-xl pt-1'>เอกสารแนบ (ถ้ามี)</label>
            <label className="block text-normal font-medium text-gray-900 dark:text-white py-2" htmlFor="file_input">อัพโหลดไฟล์</label>
            <input className="block w-3/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
            
            <div className="flex flex-col p-4">
            <div className="flex flex-row ml-8 mb-4 pt-2">
                <label className="flex items-center space-x-2" onClick={IsCheck}>
                  <input id="checkbox" type="checkbox" value="1" className="form-checkbox text-blue-500 h-4 w-4"/>
                </label>
                <p className="text-xm w-3/4 ml-4 font-bold">ฉันเข้าใจและยอมรับนโยบายความเป็นส่วนตัวของบริษัท</p>
              </div>
              <p className="text-xm pt-2 w-3/4 ml-8 indent-8">ข้าพเจ้าได้อ่านและยอมรับเงื่อนไขตามนโยบายคุ้มครองส่วนบุคคลทุกประการ และยินยอมให้มีการรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของข้าพเจ้าตามวัตถุประสงค์ที่ระบุไว้ข้างต้น.</p>
              
              <button type='submit' className={checkBoxValue?'absolute bottom-5 right-10 mt-2 h-16 w-32 text-white text-xl font-bold rounded-full shadow-lg bg-green-700 formButton hover:bg-green-900'
              :'absolute bottom-5 right-10 mt-2 h-16 w-32 text-white font-bold text-xl rounded-full shadow-lg bg-gray-300'}
              disabled={!checkBoxValue}>Submit</button>
            </div>
          </div>
        </form>
  
        </div>
  
      </div>
      </div>
  
        
      </>
    );
  }

  };
}



export default ComplaintForm;

// export const Complaint_form = () => {
//   const [checkBoxValue,setcheckBoxValue] = useState(false);

//     const IsCheck = () =>{
//         if(checkBoxValue===true){
//             setcheckBoxValue(false);
//             console.log(checkBoxValue);
//         }else{
//             setcheckBoxValue(true);
//             console.log(checkBoxValue);
//         }
//     }
  
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
//         publicKey: PUBLIC_KEY,
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
    
//     // Check file sizes
//     const fileInputs = e.target.querySelectorAll('input[type="file"]');
//     let filesValid = true;
//     fileInputs.forEach(input => {
//       const files = input.files;
//       if (files.length > 0 && files[0].size > 50 * 1024) { // Check if file size exceeds 50KB
//         alert('Please upload files smaller than 50KB.');
//         filesValid = false;
//       }
//     });
  
//     if (!filesValid) return;
  
//     // Proceed with sending the form data if files are valid
//     try {
//       const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
//       console.log(result.text);
//       alert('Message Sent Successfully');
//       e.target.reset();
//     } catch (error) {
//       console.error(error.text);
//       alert('Something went wrong!');
//     }
//   };

//   return (
//     <div>
//         <div className='relative h-full w-full z-0'>
//           <img className='h-full w-full bg-contain' src={background} alt=""/>
//         </div>


//     <div
//           className={checkBoxValue?'absolute -top-6 h-6/7 w-3/4 right-0 left-56 bg-white rounded-lg z-30 border-4 border-green-500'
//           :'absolute -top-6 h-6/7 w-3/4 right-0 left-56 bg-white rounded-lg z-30 border-4 border-gray-200'}>

//       <div className='scale-95'>


//       <h1 className='text-5xl font-extrabold pt-1 font-sans'>Complaint Form</h1>

//         <form className='pt-4 ml-4' ref={form} onSubmit={sendEmail}>
//           <div className='flex flex-col'>

//             <label className='font-medium text-xl'>Name - Surname</label>
//             <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" type="text" name="user_name" required/>

//             <label className='font-medium text-xl py-2'>Contact Number</label>
//             <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" type="text" name="phone_number" required/>

//             <label className='font-medium text-xl py-2'>Email</label>
//             <input  className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" type="email"  id="from_email" name="from_email" required/>

//             <form className="h-20 w-auto py-2 mx-1">
//               <label id='selected' name='selected' className="block text-xl font-medium text-gray-900 dark:text-white">Type of Complaint</label>
//               <select className="mt-2 bg-gray-800/20 text-gray-900 text-sm block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//                 <option selected>Choose a type of complaint</option>
//                 <option value="Fraud, Corruption and Bribery">Fraud, Corruption and Bribery</option>
//                 <option value="Conflict of Interest">Conflict of Interest</option>
//                 <option value="Human Rights">Human Rights</option>
//                 <option value="Anti Competitive, Fair Competition">Anti Competitive, Fair Competition</option>
//                 <option value="Information Security">Information Security</option>
//                 <option value="Grievance">Grievance</option>
//               </select>
//             </form>

//             <label className='font-medium text-xl py-2'>Complaint Topics</label>
//             <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" name="topic" type="topic"/>
//             {/* <input className='mx-2 pt-2' type="submit"/> */}

//             <label className='font-medium text-xl py-2'>Details</label>
//             <input className="bg-gray-800/20 h-28 w-auto mx-1 pt-2" name="message" type="message"/>
//             {/* <input className='mx-2 pt-2' type="submit"/> */}
            
//             <label className='pt-2 font-medium text-xl pt-1'>Attachment(if have)</label>
//             <label className="block text-normal font-medium text-gray-900 dark:text-white py-2" for="file_input">Upload file</label>
//             <input className="block w-3/4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>

//             <div className="flex flex-col p-4">
//                 <p className="text-xm pt-2 w-3/4 ml-8">ข้อมูลส่ววนบุคคลของคุณจะถูกจัดเก็บตาม
//                 <Link to="/policy_page" className="text-xm underline underline-offset-1 text-red-600 inline">"นโยบายความเป็นส่วนตัว"</Link> ของเราโปรดศึกษานโยบายอย่างละเอียดก่อนกดส่ง</p>
//                 <div className="flex flex-row ml-8 mb-4 pt-2">
//                     <label className="flex items-center space-x-2" onClick={IsCheck}>
//                         <input id="checkbox" type="checkbox" value="1" className="form-checkbox text-blue-500 h-4 w-4" />
                        
//                     </label>
//                     <p className="text-xm w-3/4 ml-4 font-bold">ฉันเข้าใจและยอมรับนโยบายคามเป็นส่วนตัวของบริษัท</p>
//                 </div>
//                 <button  type='submit' className={checkBoxValue?'absolute bottom-5 right-10 mt-2 h-16 w-32 text-white text-xl font-bold rounded-full shadow-lg bg-green-700 formButton hover:bg-green-900'
//                                     :'absolute bottom-5 right-10 mt-2 h-16 w-32 text-white font-bold text-xl rounded-full shadow-lg bg-gray-300'}
//                     // onClick={handleOnSubmit}
//                     disabled={!checkBoxValue}>submit
//                 </button>
//             </div>

//         </div>
//       </form>
//       </div>

//     </div>

//     </div>

//   );
// };
// export default Complaint_form;