// LIBRARIES
import React, { useState, useEffect } from "react";
import { findAll } from "../src/services/item";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// IMPORT COMPONENTS
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

//CSS
import "./global.css";

function App() {
  const [users, serUsers] = useState([]);

  //Fetch Data from the DB
  const fetchData = async () => {
    const res = await findAll();
    serUsers([...res]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(users);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
