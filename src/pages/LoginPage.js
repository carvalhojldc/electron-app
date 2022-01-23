import React, { useState, useContext } from "react";
import { AuthContext } from "../components/context/Auth.js";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userName, password);
  };

  return (
    <div>
      <br />
      <h1> Welcome to MyApp </h1> <br />
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Type your username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Type your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button variant="contained">System login</button>
      </form>{" "}
    </div>
  );
};
