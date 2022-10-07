import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import App from './App';

let data = {
  shopPage: {
    data_Wired: [
      { img: "img/1.jpg", name: "Apple BYZ S852I", price: "2927", rating: "4.7", quantity: "1" },
      { img: "img/2.jpg", name: "Apple EarPods", price: "2327", rating: "4.5", quantity: "1" },
      { img: "img/3.jpg", name: "Apple EarPods", price: "2327", rating: "4.5", quantity: "1" },
      { img: "img/1.jpg", name: "Apple BYZ S852I", price: "2927", rating: "4.7", quantity: "1" },
      { img: "img/2.jpg", name: "Apple EarPods", price: "2327", rating: "4.5", quantity: "1" },
      { img: "img/3.jpg", name: "Apple EarPods", price: "2327", rating: "4.5", quantity: "1" }
    ],

    data_Wireless: [
      { img: "img/4.jpg", name: "Apple AirPods", price: "9527", rating: "4.7", quantity: "1"},
      { img: "img/5.jpg", name: "GERLAX GH-04", price: "6527", rating: "4.7", quantity: "1" },
      { img: "img/6.jpg", name: "BOROFONE BO4", price: "7527", rating: "4.7", quantity: "1" },
    ]
  },

  cartPage: {
    cart_data: [
      // { img: "img/1.jpg", name: "Apple BYZ S852I", price: "2 927", fullPrice: "2 927" }
    ]
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App data={data} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
