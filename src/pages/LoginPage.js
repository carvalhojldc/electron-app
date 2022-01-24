import React, { useState, useContext } from "react";
import { AuthContext } from "../components/context/Auth.js";
import TextField from "@mui/material/TextField";
import "../styles.css";
export const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userName, password);
  };

  return (
    <div className="App">
      <br />
      <h1> Welcome to MyApp </h1> <br />
      <form onSubmit={handleSubmit}>
        <TextField
          required
          label="Username"
          variant="filled"
          type="text"
          placeholder="Type your username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <br />
        <TextField
          required
          label="Password"
          variant="filled"
          type="password"
          placeholder="Type your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button>System login</button>
      </form>
    </div>
  );
};
