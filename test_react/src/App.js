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

  h1{
    font-size: 3rem;
  }
`;

class App extends Component {
  state = {
    task: [
      {
        title: "test",
        done: false,
      },
    ],
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { task } = this.state;

    return (
      <>
        <GlobalStyle />
        <h1>TO DO LIST</h1>
        <FormTask handleSubmit={this.handleSubmit} />
        <div>
          {
            task.map(task=>(
              <p>{task.title}</p>
            ))
          }
        </div>
      </>
    );
  }
}

export default App;
