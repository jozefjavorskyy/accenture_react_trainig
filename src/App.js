import React from "react";
import style from "./appStyle";
import "./styles.css";

// Component
// resuable
const App = ({ firstName, lastName }) => {
  return (
    <>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
    </>
  );
};

export default App;
