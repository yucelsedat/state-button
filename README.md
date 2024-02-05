# useState ile basit bir button uygulaması


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

Daha sonra bu kodu App.js e ekliyoruz 

```
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
<div align="center">
  <a href="https://www.styled-components.com">
    <img alt="styled-components" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" height="150px" />
  </a>
</div>

<br />

<div align="center">
  <strong>Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅</strong>
  <br />
  <br />
  <a href="https://www.npmjs.com/package/styled-components"><img src="https://www.styled-components.com/proxy/downloads.svg" alt="downloads: 600k/month"></a>
  <a href="#backers" alt="sponsors on Open Collective"><img src="https://opencollective.com/styled-components/backers/badge.svg" /></a> <a href="#sponsors" alt="Sponsors on Open Collective"><img src="https://opencollective.com/styled-components/sponsors/badge.svg" /></a> <a href="https://discord.gg/hfGUrbrxaU">
        <img alt="Discord" src="https://img.shields.io/discord/818449605409767454?logo=discord" /></a>
  <a href="https://bundlephobia.com/result?p=styled-components" title="styled-components latest minified+gzip size"><img src="https://badgen.net/bundlephobia/minzip/styled-components" alt="gzip size"></a>
  <a href="#alternative-installation-methods"><img src="https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg" alt="module formats: umd, cjs, esm"></a>
  <a href="https://codecov.io/gh/styled-components/styled-components"><img src="https://codecov.io/gh/styled-components/styled-components/coverage.svg?branch=main" alt="Code Coverage"></a>
</div>

---

**Upgrading from v5?** See the [migration guide](https://styled-components.com/docs/faqs#what-do-i-need-to-do-to-migrate-to-v6).

Utilizing [tagged template literals](https://www.styled-components.com/docs/advanced#tagged-template-literals) (a recent addition to JavaScript) and the [power of CSS](https://www.styled-components.com/docs/api#supported-css), `styled-components` allow you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

```jsx
const Button = styled.button`
  color: grey;
`;
```

Alternatively, you may use [style objects](https://www.styled-components.com/docs/advanced#style-objects). This allows for easy porting of CSS from inline styles, while still supporting the more advanced styled-components capabilities like component selectors and media queries.

```jsx
const Button = styled.button({
  color: 'grey',
});
```

Equivalent to:

```jsx
const Button = styled.button`
  color: grey;
`;
```

`styled-components` is compatible with both React (for web) and React Native – meaning it's the perfect choice even for truly universal apps! See the [documentation about React Native](https://www.styled-components.com/docs/basics#react-native) for more information.

_Supported by [Front End Center](https://frontend.center). Thank you for making this possible!_

---