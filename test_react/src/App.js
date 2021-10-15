import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import FormTask from "./components/FormTask";
import Task from "./components/Task";
import { nanoid as id } from "nanoid";

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

const urlApi = "https://catfact.ninja/facts";

class App extends Component {
  state = {
    task: [
      
    ],
  };

  fecthApi = async () => {
    const response = await fetch(urlApi);
    const respondeParser = await response.json();
    const factToUse = respondeParser.data[0];
    this.createNewTask(factToUse.fact);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.trim() !== "") {
      this.createNewTask(e.target.title.value);
      e.target.title.value = "";
    }
  };

  createNewTask = (title) => {
    const newTask = {
      id: id(),
      title,
      color: allColors.colors[1],
      done: false,
    };

    const allTask = [...this.state.task, newTask];

    this.setState({ task: allTask });
  };

  getTask = (id) => {
    const task = this.state.task.find((task) => task.id === id);
    return task;
  };

  handleCompleteTask = (id) => {
    const currentTask = this.state.task;
    const task = this.getTask(id);
    const index = currentTask.indexOf(task);

    currentTask[index].done = !currentTask[index].done;

    this.setState({ task: currentTask });
  };

  handleDeleteTask = (id) => {
    let currentTask = this.state.task;

    currentTask = currentTask.filter((task) => task.id !== id);

    this.setState({ task: currentTask });
  };

  handleEditTask = (id) => {
    let currentTask = this.state.task;

    currentTask = currentTask.filter((task) => task.id === id);

    this.setState({ task: currentTask });
  };

  render() {
    const { task } = this.state;

    return (
      <>
        <GlobalStyle />
        <h1>TO DO LIST</h1>
        <FormTask handleSubmit={this.handleSubmit} fecthApi={this.fecthApi} />

        {this.state.task.length === 0 && <h2>No hay actividades aun</h2>}

        <div>
          {task.map((task) => (
            <Task
              key={id()}
              done={task.done}
              title={task.title}
              color={task.color}
              handleCompleteTask={() => this.handleCompleteTask(task.id)}
              handleDeleteTask={() => this.handleDeleteTask(task.id)}
              handleEditTask={() => this.handleEditTask(task.id)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
