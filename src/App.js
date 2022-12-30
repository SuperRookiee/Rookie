import React from 'react';
import GlobalStyles from './GlobalStyles';
import { Routes, Route } from "react-router-dom";


import Space from './pages/Space';
import Seoul from './pages/Seoul';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <GlobalStyles/>
      <Header />
      <Routes>
          <Route path='/' element={<Space />} />
          <Route path='/seoul' element={<Seoul />} />
      </Routes>

    </div>
  );
}

export default App;