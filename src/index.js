import React from "react";
import  ReactDOM  from "react-dom";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCznIP4KdspgxhpisjPgvC1we2ctad-DZk",
  authDomain: "sorting-visualizer-379de.firebaseapp.com",
  projectId: "sorting-visualizer-379de",
  storageBucket: "sorting-visualizer-379de.appspot.com",
  messagingSenderId: "871303949182",
  appId: "1:871303949182:web:e6f9c341be974abb60212f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(<App/>,document.querySelector("#root"));