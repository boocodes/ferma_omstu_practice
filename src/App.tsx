import React from 'react';
import './App.css';
import WelcomePage from "./pages/welcome/welcome";
import {Route, Routes} from 'react-router-dom';
import PolicyPage from "./pages/policy/policy";



function App() {
  return (
      <Routes>
        <Route element={<WelcomePage/>} path={"/"}/>
        <Route path="*" element={<WelcomePage/>}/>
        <Route path={"/policy"} element={<PolicyPage/>}/>
      </Routes>

  );
}

export default App;
