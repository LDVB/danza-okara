import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactUs.css";
import { Col, Row } from "react-bootstrap";


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tb73rff', 'template_du9v9ba', form.current, {
        publicKey: 't9StgYEnqtufVChdg',
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
      <form ref={form} onSubmit={sendEmail} className='formularioContacto'>
        <div className='formulario-linea'>
          <div className='form-group' >
        <label htmlFor="user_name"></label>
        <input type="text" name="user_name" id="user_name" placeholder="Nombre"/>
        </div>
        <div className='form-group' >
        <label htmlFor="user_email"></label>
        <input type="email" name="user_email" id="user_email" placeholder="Email"/>
      </div></div>
      
      <div className='form-group'>
        <label htmlFor="message"></label>
        <textarea name="message" id="message" placeholder="Mensaje"/>
      </div>
      <input type="submit" value="Enviar" className='submit-button'/>
    </form>
  );
};


export default ContactUs;