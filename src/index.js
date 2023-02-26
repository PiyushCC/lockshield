import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Land from './Land';
import App from './App'
import Contact from 'components/Contact';
import Services from 'components/Services';
import { Route, Link, Routes, HashRouter  } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter >
    <Routes>
      <Route path='/' element={<Land/>}></Route>
      <Route path='/app' element={<App/>}></Route>
    </Routes>
    </HashRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

