import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import StyledCheckbox from "../checkbox";

import bg from "../asset/Background Whistle Blower part 2.jpg";
export const background = bg;

export const Complaint_form = () => {
  const form = useRef();

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

  return (
    <div>
        <div className='relative h-full w-full z-0'>
          <img className='h-full w-full bg-contain' src={background} alt=""/>
        </div>


    <div className="absolute -top-4 h-5/6 w-3/4 ml-48 bg-white z-30">

    <h1 className='text-5xl font-extrabold'>Complaint Form</h1>

      <form className='pt-4 ml-4' ref={form} onSubmit={sendEmail}>
        <div className='flex flex-col'>

          <label className='font-bold text-xl'>Name - Surname</label>
          <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" type="text" name="user_name"/>

          <label>Contact Number</label>
          <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" type="email" name="user_email"/>

          <label>Email</label>
          <input  className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" type="email" name="user_email"/>

          <label>Type of Complaint</label>
          {/* <textarea className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" name="message"/> */}
          <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" name="message" type="email"/>
          {/* <input className='mx-2 pt-2' type="submit"/> */}

          <label>Complaint Topics</label>
          <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" name="message" type="email"/>
          {/* <input className='mx-2 pt-2' type="submit"/> */}

          <label>Details</label>
          <input className="bg-gray-800/20 h-28 w-auto mx-1 pt-2" name="message" type="email"/>
          {/* <input className='mx-2 pt-2' type="submit"/> */}
          <label>Attachment(if have)</label>
          <input className="bg-gray-800/20 h-8 w-auto mx-1 pt-2" name="message" type="email"/>

          <div className="flex flex-col p-4 inline">
              <StyledCheckbox></StyledCheckbox>
              <p className="text-xm pt-2 text-xs w-3/4">I have read and accepted the conditions as stated in Personal protection policy in all respects and give consent to the collection, use and disclosure of my personal information, accorcding to the objectives stated above</p>
          </div>
          <button className='absolute top-96 mt-44 right-12 h-12 w-24 text-white font-bold rounded-full shadow-lg bg-gray-700 hover:bg-gray-900' onClick={sendEmail}>submit</button>

        </div>
      </form>

    </div>

    </div>

  );
};
export default Complaint_form;