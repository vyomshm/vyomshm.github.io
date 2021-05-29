import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import fonts
// order -> Light, Book, Medium, Bold, Extra Bold, and Black
import "./fonts/AirbnbCerealBlack.ttf";
import "./fonts/AirbnbCerealBold.ttf";
import "./fonts/AirbnbCerealBook.ttf";
import "./fonts/AirbnbCerealExtraBold.ttf";
import "./fonts/AirbnbCerealLight.ttf";
import "./fonts/AirbnbCerealMedium.ttf";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
