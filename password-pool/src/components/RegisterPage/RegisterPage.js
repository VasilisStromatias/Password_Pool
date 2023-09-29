import React, { useEffect, useId, useState } from "react";
import { findAll, create } from "../../services/item";
import "./register.css";

function RegisterPage() {
  const [users, serUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
  });
  const firstNameId = useId();
  const lastNameId = useId();
  const userNameId = useId();
  const emailId = useId();
  const passwordId = useId();

  //Fetch Data from the DB
  const fetchData = async () => {
    const res = await findAll();
    serUsers([...res]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const submit = () => {
    create({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      userName: newUser.userName,
      email: newUser.email,
      password: newUser.password,
    });
    setNewUser({
      ...newUser,
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    });
  };

  console.log(newUser);

  return (
    <div className="form-wrapper">
      <div className="form-inner">
        <form>
          <div className="fieldset">
            <div className="inputs">
              <label htmlFor={firstNameId}>First Name</label>
              <input
                id={firstNameId}
                name="firstName"
                type="text"
                value={newUser.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor={lastNameId}>Last Name</label>
              <input
                id={lastNameId}
                name="lastName"
                type="text"
                value={newUser.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor={userNameId}>User Name</label>
              <input
                id={userNameId}
                name="userName"
                type="text"
                value={newUser.userName}
                onChange={handleChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor={emailId}>Email</label>
              <input
                id={emailId}
                name="email"
                type="email"
                value={newUser.email}
                onChange={handleChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor={passwordId}>Password</label>
              <input
                id={passwordId}
                name="password"
                type="text"
                value={newUser.password}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        <button onClick={submit}>Register</button>
      </div>
    </div>
  );
}

export default RegisterPage;
