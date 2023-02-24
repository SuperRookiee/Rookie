import React, { memo } from 'react';
import { Routes, Route } from "react-router-dom";
import GlobalStyles from './GlobalStyles';

import Header from './components/Header';

import Home from './pages/Home';
import Music from './pages/Music';
import About from './pages/About';

const App = memo(() => {
  return (
    <div>
      <GlobalStyles/>
      <Header/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/music' element={<Music />} />
          <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
});

export default App;

// "proxy":"http://localhost:3001",
// "start": "react-scripts start | json-server --watch ./src/assets/json/data.json --port 3001",