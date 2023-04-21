import React, { useState } from 'react';


const EmailButton = () => {
    const recipient = '656services@gmail.com';
    const subject = '';
    const body = '';
  
    const handleButtonClick = () => {
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };
  
    return (
      <button onClick={handleButtonClick}>Email my ass</button>
    );
  };

export default EmailButton;