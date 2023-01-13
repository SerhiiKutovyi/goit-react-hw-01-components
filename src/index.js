import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement('div', {
  a: 5,
  b: 10,
  children: 'hello world',
});

const jsxElement = <div>hello world</div>;
console.log(jsxElement);

// ReactDOM.createRoot(element, document.querySelector('#root'));

// import ReactDOM from 'react-dom/client';
// // import { App } from 'components/App';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  element
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
