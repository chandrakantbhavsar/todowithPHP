import React, { useState } from "react";
import { Input,Tooltip } from "antd";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons";

const StyledInput = styled(Input)`
  width: 200px;
  vertical-align: top;
`;

const StyledPlus = styled(PlusOutlined)`
  padding-left:10px;
  padding-top: 3px;
  font-size:25px;
  cursor:pointer;
`;

const AddTodo = ({ReceiveTodo}) => {
  const [todo, setTodo] = useState("");
  

  const insertTodo = () => {
    if (todo !== '') {
      ReceiveTodo(todo);
      setTodo("");
    }
  };

  return (
    <>
      <StyledInput 
          placeholder="Add ToDos" 
          value={todo} 
          onChange={(e) => setTodo(e.target.value)} 
      />
      <Tooltip title="Add">
        <StyledPlus onClick={insertTodo} />
      </Tooltip>
    </>
  );
};

export default AddTodo;
