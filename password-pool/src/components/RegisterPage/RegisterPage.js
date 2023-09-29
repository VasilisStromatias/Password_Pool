import React, { useEffect, useId, useState } from "react";
import { findAll, create } from "../../services/item";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "./register.css";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const [users, serUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    rPassword: "",
  });
  const firstNameId = useId();
  const lastNameId = useId();
  const userNameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const rPasswordId = useId();

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

  const submit = (data) => {
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
      rPassword: "",
    });
  };

  // console.log(newUser);

  return (
    <div className="form-wrapper">
      <div className="form-inner">
        <form>
          <div className="fieldset">
            <div className="inputs">
              <label htmlFor={firstNameId}>First Name</label>
              <input
                id={firstNameId}
                {...register("firstName", { required: true })}
                type="text"
                value={newUser.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <div className="error-message">
                  <ul>
                    <li>First name is missing</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="inputs">
              <label htmlFor={lastNameId}>Last Name</label>
              <input
                id={lastNameId}
                {...register("lastName", { required: true })}
                type="text"
                value={newUser.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <div className="error-message">
                  <ul>
                    <li>Last name is missing</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="inputs">
              <label htmlFor={userNameId}>User Name</label>
              <input
                id={userNameId}
                {...register("userName", { required: true })}
                type="text"
                value={newUser.userName}
                onChange={handleChange}
              />
              {errors.userName && (
                <div className="error-message">
                  <ul>
                    <li>Username is missing</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="inputs">
              <label htmlFor={emailId}>Email</label>
              <input
                id={emailId}
                {...register("email", {
                  required: "Email is missing",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email form",
                  },
                })}
                type="email"
                value={newUser.email}
                onChange={handleChange}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <div key={type} className="error-message">
                      <ul>
                        <li>{message}</li>
                      </ul>
                    </div>
                  ))
                }
              />
            </div>
            <div className="inputs">
              <label htmlFor={passwordId}>Password</label>
              <input
                id={passwordId}
                {...register("password", {
                  required: "This is required",
                  minLength: {
                    value: 3,
                    message: "Pass needs to be over 3 charachters",
                  },
                  maxLength: {
                    value: 5,
                    message: "Pass must be no more than 5 characters",
                  },
                  pattern: {
                    value: /[A-Z]/,
                    message: "Pass must contain at least one capital letter",
                  },
                })}
                type="password"
                value={newUser.password}
                onChange={handleChange}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <div key={type} className="error-message">
                      <ul>
                        <li>{message}</li>
                      </ul>
                    </div>
                  ))
                }
              />
            </div>
            <div className="inputs">
              <label htmlFor={rPasswordId}>Confirm password</label>
              <input
                id={rPasswordId}
                {...register("rPassword", {
                  required: "This is required",
                  validate: (val) => {
                    if (watch("password") !== val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
                type="password"
                value={newUser.rPassword}
                onChange={handleChange}
              />
              <ErrorMessage
                errors={errors}
                name="rPassword"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <div key={type} className="error-message">
                      <ul>
                        <li>{message}</li>
                      </ul>
                    </div>
                  ))
                }
              />
            </div>
          </div>
        </form>
        <button onClick={handleSubmit(submit)}>Register</button>
      </div>
    </div>
  );
}

export default RegisterPage;
