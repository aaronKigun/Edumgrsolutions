import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA7BLFUnmriuLYjw00BBtbTbp87QrSnzOg",
  authDomain: "edumgr-solutions.firebaseapp.com",
  projectId: "edumgr-solutions",
  storageBucket: "edumgr-solutions.appspot.com",
  messagingSenderId: "591627772456",
  appId: "1:591627772456:web:e6609342a1ae5c2226cb1d",
  measurementId: "G-NE8TGEHNZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
