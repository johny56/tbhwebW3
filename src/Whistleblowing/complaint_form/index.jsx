import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      <button className='h-8 w-12 bg-gray-700 hover:bg-gray-900 ml-24s' onClick={sendEmail}>submit</button>
    </form>
  );
};
export default Complaint_form;