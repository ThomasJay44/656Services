import React from 'react';

import './contact.css';
import EmailButton from '../Componants/EmailButton';
import TextButton from '../Componants/TxtButton';



function Contact() {
  return (
    <div className='contact'>
      <h1>Welcome contact form!</h1>
      <EmailButton />
      <TextButton />
    </div>
  );
}

export default Contact;