import React from 'react';
import Home from './NASA/Home.js';
import Apod from './NASA/apod.js';
import Marsrover from './NASA/mars.js';
import Epic from './NASA/epic.js';
import Neo from './NASA/neo.js';
import Search from './NASA/search.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App()
{ 
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Apod" element={<Apod />} />
      <Route path="/Marsrover" element={<Marsrover />} />
      <Route path="/Epic" element={<Epic />} />
      <Route path="/Neo" element={<Neo />} />
      <Route path="/Search" element={<Search />} />
    </Routes>
  </Router>
      );
}

export default App;
