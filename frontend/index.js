import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import {BrowserRouter} from "react-router-dom";
import Login from "./components/Login";

 ReactDOM.render(
           <BrowserRouter>
           <Login/>
           </BrowserRouter>,document.getElementById("root"))
  


     


