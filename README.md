# useState ile basit bir button uygulaması


```jsx
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
```
<hr/>
Daha sonra bu kodu App.js e ekliyoruz 


```jsx
    import './App.css';
    import ButtonApp from './ButtonApp';

    
    function App() {
        return (
            <div className="App">
            <ButtonApp/> 
            </div> 
        ); 
    }

    export default App;
```