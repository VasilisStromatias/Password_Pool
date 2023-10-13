import React, { useId, useState } from "react";
import "./home.css";

function HomePage() {
  const [input, setInput] = useState({ title: "", username: "", password: "" });
  const [passwords, setPasswords] = useState([]);

  const titleId = useId();
  const userNameId = useId();
  const passwordId = useId();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswords((current) => {
      return [
        ...current,
        {
          id: crypto.randomUUID(),
          title: input.title,
          username: input.username,
          password: input.password,
        },
      ];
    });
    setInput({ title: "", username: "", password: "" });
  };

  return (
    <>
      <form>
        <div className="form-fields">
          <div className="inputs">
            <label htmlFor={titleId}>Title</label>
            <input
              id={titleId}
              type="text"
              name="title"
              value={input.title}
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label htmlFor={userNameId}>Username or email</label>
            <input
              id={userNameId}
              type="text"
              name="username"
              value={input.username}
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label htmlFor={passwordId}>Password</label>
            <input
              id={passwordId}
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSubmit}> submit</button>
        </div>
      </form>

      <div className="output">
        <h2>Output</h2>
        <div className="password-list">
          <ul className="password-list">
            {passwords.map((item) => {
              return (
                <>
                  <li key={item.id}>
                    <span>{item.title}</span>
                    <br></br>
                    <span>{item.username}</span>
                    <br></br>
                    <span>{item.password}</span>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomePage;
