import React from 'react'
import {Table,Tooltip} from 'antd';
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

const StyledTable = styled(Table)`
  width:500px;
  padding-top:20px;
`;

const StyledClosed = styled(CloseOutlined)`
  padding-left:10px;
  font-size:20px;
  cursor:pointer;
`;

const Todos = ({TotalTodos,ReceivedDeleteTodo}) => {
  
  let dataSource = [];
  if(TotalTodos.length>0)
    dataSource = TotalTodos;

  const columns = [
    {
      title: 'To Do',
      dataIndex: 'todo_name',
      key: 'todo_name',
    },
    {
      title: 'Action',
      key:'todo_id',
      render: (_, record) => {
        return (
          <Tooltip title="Delete">
            <StyledClosed onClick={() => ReceivedDeleteTodo(record.todo_id)} />
          </Tooltip>
        )
      }
    }
  ];

  return (
    <StyledTable dataSource={dataSource} columns={columns} locale={{ emptyText: 'No records found' }} />
  )
}

export default Todos