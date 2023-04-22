import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

function MyInstagramPost() {
  const handleLoad = (data) => {
    console.log(data);
  };

  return (
    <InstagramEmbed
      url='https://www.instagram.com/p/Cq8TaMPOh1U/'
      onLoad={handleLoad}
      containerTagName='div'
      protocol=''
      injectScript
    />y
  );
}

export default MyInstagramPost;