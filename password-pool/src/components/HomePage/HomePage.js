import React, { useId, useState } from "react";
import "./home.css";

function HomePage() {
  const [input, setInput] = useState({ title: "", password: "" });
  const [passwords, setPasswords] = useState([]);

  const titleId = useId();
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
          password: input.password,
        },
      ];
    });
    setInput({ title: "", password: "" });
  };

  return (
    <>
      <form>
        <div className="form-fields">
          <div className="inputs">
            <label htmlFor="title">Title</label>
            <input
              id={titleId}
              type="text"
              name="title"
              value={input.title}
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label htmlFor="password">Password</label>
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
