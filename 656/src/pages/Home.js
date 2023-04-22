import React from 'react';

import './home.css';
import MyInstagramPost from '../Componants/MyInstagramPost';

function Home() {
  return (
    <div className='home'>
      <h1>Welcome to my website!</h1>
      <p>Here's some information about my company...</p>
      <div>
        <MyInstagramPost />
      </div>
    </div>
  );
}

export default Home;