import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import FormTask from "./components/FormTask";

import allColors from "./styles/colors";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: sans-serif;
    background-color: #222;
    color: ${allColors.mainColor};
    text-align: center;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>To do list</h1>
      <FormTask />
    </>
  );
}

export default App;
