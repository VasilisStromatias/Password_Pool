// LIBRARIES
import React, { useState, useEffect } from "react";
import { findAll } from "../src/services/item";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// IMPORT COMPONENTS
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Index from "./components/Index/Index";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
      <Header />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage users={users} />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
