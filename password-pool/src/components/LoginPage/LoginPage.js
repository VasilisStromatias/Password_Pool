import React, { useEffect, useState } from "react";
import { create } from "../../services/item";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";

import "./login.css";

function LoginPage({ users }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const [loginInput, setLoginInput] = useState({
    lemail: "",
    lpass: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLoginInput({
      ...loginInput,
      [name]: value,
    });
  };

  const submit = (data) => {
    setLoginInput({
      ...loginInput,
      lemail: "",
      lpass: "",
    });
  };

  // console.log(users);
  // console.log(loginInput);

  return (
    <>
      <div className="login-page register-page">
        <div className="form-wrapper">
          <div className="form-inner">
            <div className="page-title">
              <h1>Login</h1>
            </div>
            <form>
              <div className="fieldset">
                <div className="inputs">
                  <label htmlFor="lemail">Email</label>
                  <input
                    id="lemail"
                    placeholder="Fill in your email"
                    type="text"
                    {...register("lemail")}
                    onChange={handleChange}
                    value={loginInput.lemail}
                  />
                </div>
                <div className="inputs">
                  <label htmlFor="lpass">Password</label>
                  <input
                    id="lpass"
                    placeholder="Fill in your password"
                    type="password"
                    {...register("lpass")}
                    onChange={handleChange}
                    value={loginInput.lpass}
                  />
                </div>
                <div className="output">
                  <h2>Output</h2>
                  <p>Email: {loginInput.lemail}</p>
                  <p>Password :{loginInput.lpass}</p>
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
    </>
  );
}

export default LoginPage;
