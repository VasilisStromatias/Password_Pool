import React, { useEffect, useState } from "react";
import { create } from "../../services/item";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";

import "./login.css";

function LoginPage({ users }) {
  const navigate = useNavigate();

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const [loginInput, setLoginInput] = useState({
    lemail: "",
    lpass: "",
  });
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLoginInput({
      ...loginInput,
      [name]: value,
    });
  };

  const submit = (data) => {
    // Make an array with all the user emails
    const emailList = users.map((item) => {
      const email = item.email;

      if (email === data.lemail) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }

      return email;
    });

    // Make an array with all the user passwords
    const passwordList = users.map((item) => {
      const password = item.password;

      if (password === data.lpass) {
        setPasswordValid(true);
      } else {
        setPasswordValid(false);
      }

      return password;
    });

    if (emailValid && passwordValid) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }

    console.log(isLogged);
    setLoginInput({
      ...loginInput,
      lemail: "",
      lpass: "",
    });
  };

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

                {/* <Multiselect
                  displayValue="name"
                  onKeyPressFn={function noRefCheck() {}}
                  onRemove={function noRefCheck() {}}
                  onSearch={function noRefCheck() {}}
                  onSelect={function noRefCheck() {}}
                  options={cities}
                  selectionLimit={3}
                  showCheckbox
                /> */}
              </div>
            </form>
            <div className="buttons">
              <button className="main-button" onClick={handleSubmit(submit)}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
