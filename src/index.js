import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Land from './Land';
import App from './App'
import Contact from 'components/Contact';
import Services from 'components/Services';
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Land/>}></Route>
      <Route path='/app' element={<App/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

