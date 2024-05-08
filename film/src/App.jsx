import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';

import './reset.css';
import './common.css';

function App () {
  
    return (
      <div className="app">
        <Routes>
        <Route path="/" exact element={<MainPage/>} />
        <Route path="/list/:id" exact element={<ListPage/>} />
        </Routes>
       
      </div>
    );
  }


export default App;
