import React, { useEffect, useState } from "react";
import { findAll, create } from "../../services/item";
import "./register.css";

function RegisterPage() {
  const [users, serUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "" });

  //Fetch Data from the DB
  const fetchData = async () => {
    const res = await findAll();
    serUsers([...res]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => setNewUser({ ...newUser, name: e.target.value });

  const submit = () => {
    create({ firstName: newUser.name });
    setNewUser({ ...newUser, name: "" });
  };

  return (
    <div>
      <input type="text" value={newUser.name} onChange={handleChange} />
      <button onClick={submit}>Register</button>
    </div>
  );
}

export default RegisterPage;
