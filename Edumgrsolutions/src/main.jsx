import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAz_bhVPLY1u-uCWGDR262KCq6bpIaxRSE",
  authDomain: "edumgrsolutionss.firebaseapp.com",
  projectId: "edumgrsolutionss",
  storageBucket: "edumgrsolutionss.appspot.com",
  messagingSenderId: "473387518200",
  appId: "1:473387518200:web:fe63cc1da0b6378fecd30d",
  measurementId: "G-0Q0DL82Q50"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
