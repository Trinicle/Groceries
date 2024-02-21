import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from './components/Login.js';
import Home from './components/Home.js';
import Register from './components/Register.js'


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
