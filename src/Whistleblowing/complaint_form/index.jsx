import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import StyledCheckbox from "../checkbox";

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

    <div className="h-screen w-3/4 ml-48 z-0 bg-green-200/50">

    <h1 className='text-5xl font-extrabold'>Complaint Form</h1>

      <form className='pt-4 ml-4' ref={form} onSubmit={sendEmail}>
        <div className='flex flex-col'>

          <label className='font-bold text-xl'>Name - Surname</label>
          <input className="h-8 w-auto mx-1 pt-2" type="text" name="user_name" />

          <label>Contact Number</label>
          <input className="h-8 w-auto mx-1 pt-2" type="email" name="user_email" />

          <label>Message</label>
          <textarea  className="h-8 w-auto mx-1 pt-2" name="message"/>
          <input type="submit" value=""/>

          <label>Email</label>
          <input  className="h-8 w-auto mx-1 pt-2" type="email" name="user_email" />

          <label>Type of Complaint</label>
          <textarea className="h-8 w-auto" name="message" />
          <input className='mx-2 pt-2' type="submit"/>

          <label>Complaint Topics</label>
          <textarea className="h-8 w-auto" name="message" />
          <input className='mx-2 pt-2' type="submit"/>

          <label>Details</label>
          <textarea className="h-8 w-auto" name="message" />
          <input className='mx-2 pt-2' type="submit"/>

          <button className='h-8 w-12 bg-gray-700 hover:bg-gray-900 ml-24s' onClick={sendEmail}>submit</button>

        </div>
      </form>

      <div className="flex flex-col p-4">
          <StyledCheckbox></StyledCheckbox>
          <p className="text-xm pt-2">I have read and accepted the conditions as stated in Personal protection policy in all respects and give consent to the collection, use and disclosure of my personal information, accorcding to the objectives stated above</p>
      </div>

    </div>
  );
};
export default Complaint_form;