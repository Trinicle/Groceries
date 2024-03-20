import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Register from './components/Register.js'

Amplify.configure(config)

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem('loggedIn') || false)
  });

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('user')) || ""
  })

  useEffect(() => {
    window.localStorage.setItem('loggedIn', JSON.stringify(loggedIn))
    return () => {}
  }, [loggedIn])

  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify(user))
    return () => {}
  }, [user])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setUser={setUser}/>} />
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
