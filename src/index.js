import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { Hangman } from "./components/Hangman"
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Hangman />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

