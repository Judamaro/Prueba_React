import React from "react";
import styled from "styled-components";
import allColors from "../styles/colors";

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${allColors.mainColor};
  background: none;
  outline: none;
  color: ${allColors.mainColor};
  width: 20rem;
  height: 2rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${allColors.mainColor};
  color: ${allColors.mainColor};
  margin-left: 30px;
  font-size: 25px;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.3rem 0.3rem;

  &:hover {
    background-color: ${allColors.mainColor};
    color: #222;
  }
`;

const FormTask = ({ handleSubmit, fecthApi }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input name="title" type="text" />
      <Button onClick={fecthApi}>Aleatorio</Button>
      <Button>Añadir Tarea</Button>
    </form>
  );
};

export default FormTask;
