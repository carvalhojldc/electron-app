import React from "react";
import NavPages from "./NavPages.js";

export const HomePage = () => {
  const HELO = () => {
    console.log(1);
    return <h1></h1>;
  };
  return (
    <div>
      <HELO />
      <h1> THIS IS THE HOME</h1>{" "}
    </div>
  );
};
