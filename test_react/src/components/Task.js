import React from "react";
import styled from "styled-components";

const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 50px;
  background-color: ${({ color }) => color};
  justify-items: start;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  max-width: 700px;
  margin: 1rem auto;
  border-radius: 5px;
`;

const TaskButton = styled.button`
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.3rem 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #fff;
    color: #222;
  }
`;

const TaskText = styled.p`
  font-size: 1rem;
  color: #fff;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
`;

const Task = ({ title, color, done, handleCompleteTask, handleDeleteTask, handleEditTask }) => (
  <TaskContainer color={color}>
    <input
      type="checkbox"
      onChange={handleCompleteTask}
      defaultChecked={done}
    />
    
    <TaskText done={done}>{title}</TaskText>
    <TaskButton onClick={handleEditTask}>Editar</TaskButton>
    <TaskButton onClick={handleDeleteTask}>Borrar</TaskButton>
  </TaskContainer>
);

export default Task;
