import React from 'react';

const TextButton = () => {
    const recipient = '9733037756';
    const message = '';
  
    const handleButtonClick = () => {
      window.location.href = `sms:${recipient}&body=${encodeURIComponent(message)}`;
    };
  
    return (
      <button onClick={handleButtonClick}>Text me</button>
    );
  };
  
  export default TextButton;