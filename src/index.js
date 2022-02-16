import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import HelloComponent from './Components/HelloComponet';

// การสร้าง Functional Component
// function HelloComponent() {
//   return <h1>สวัสดี Component</h1>
// }

// การสร้าง Class Component
// class HelloComponent extends React.Component{
//   render() {
//     return <h1>Hello class extends</h1>
//   }
// }

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
