import React from "react";
import { useState } from "react";


import { useNavigate } from "react-router-dom";

export const Loginpage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  let navigate = useNavigate();

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  async function loginFetch(e) {
    e.preventDefault();
    console.log("----login----")
    try {
      let info = {
        password: password,
        email: email,
      };

      const result = await fetch(
        "https://first-node-js-app-r.herokuapp.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(info),
        }
      );
      const data = await result.json();
      console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/todo");
      }
    } catch (erorr) {
      console.log(erorr.message);
    }
  }

  return (
    <form className="login-form" onSubmit={loginFetch}>
      <div className = "banner">
      <video loop autoPlay muted id = "background-video">
        <source src={require ("../assets/Pale Moon Over The City - 4K.mp4")} type="video/mp4"/>
  </video>
        <h3>Login</h3>
        </div>
        <div className="input-login">
      <label>
       
        <input 
          type="password"
          placeholder="Enter password... "
          name="password"
          onChange={passwordHandler}
          value={password}
        />
      </label>
      <label>
       
        <input
          type="email"
          placeholder="Enter e-mail..."
          name="email"
          onChange={emailHandler}
          value={email}
        />
      </label>
      <button className = "submit" type ="submit">Submit</button>
      </div>
    </form>
  );
};
