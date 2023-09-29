//LIBRARIES
import React, { useId, useState } from "react";
import { create } from "../../services/item";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from 'react-router-dom';


//CSS
import "./register.css";

function RegisterPage() {
  const navigate = useNavigate();

  //useForm (from react-hook-form)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  //useState
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    rPassword: "",
  });

  //useId
  const firstNameId = useId();
  const lastNameId = useId();
  const userNameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const rPasswordId = useId();

  //Functions
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
    navigate('/home')
  };

  return (
    <div className="register-page">
      <div className="form-wrapper">
        <div className="form-inner">
          <div className="page-title">
            <h1>Register</h1>
          </div>
          <form>
            <div className="fieldset">
              <div className={errors.firstName ? "inputs withError" : "inputs"}>
                <label htmlFor={firstNameId}>First Name</label>
                <input
                  id={firstNameId}
                  {...register("firstName", { required: true })}
                  type="text"
                  value={newUser.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <div className="error-message">
                    <ul>
                      <li>First name is missing</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className={errors.lastName ? "inputs withError" : "inputs"}>
                <label htmlFor={lastNameId}>Last Name</label>
                <input
                  id={lastNameId}
                  {...register("lastName", { required: true })}
                  type="text"
                  value={newUser.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <div className="error-message">
                    <ul>
                      <li>Last name is missing</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className={errors.userName ? "inputs withError" : "inputs"}>
                <label htmlFor={userNameId}>User Name</label>
                <input
                  id={userNameId}
                  {...register("userName", { required: true })}
                  type="text"
                  value={newUser.userName}
                  onChange={handleChange}
                  placeholder="Username"
                />
                {errors.userName && (
                  <div className="error-message">
                    <ul>
                      <li>Username is missing</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className={errors.email ? "inputs withError" : "inputs"}>
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
                  placeholder="Email"
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
              <div className={errors.password ? "inputs withError" : "inputs"}>
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
                  placeholder="Password"
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
              <div className={errors.rPassword ? "inputs withError" : "inputs"}>
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
                  placeholder="Confirm password"
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
          <div className="buttons">
            <button className="main-button" onClick={handleSubmit(submit)}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
