import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"

const [, , third] = ["boots", "tent", "headlamp"];
console.log(third);

//Authorized components only
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
