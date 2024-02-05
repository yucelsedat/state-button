import React, { useState } from 'react';

function ButtonApp() {
    const [text, setText] = useState('');
  
    const handleClick = () => {
      setText('Merhaba Dünya!');
    };
  
    return (
      <div>
        <p>{text}</p>
        <button onClick={handleClick}>Tıkla</button>
      </div>
    );
  }
  
  export default ButtonApp;