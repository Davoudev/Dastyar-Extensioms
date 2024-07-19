import React, { useState } from "react";
import TodoForm from "../components/Todo-list/TodoForm";
import { Box, GridItem, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import Todo from "../components/Todo-list/Todo";
uuidv4();

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  return (
    <GridItem colSpan={3} rowSpan={14} bg={"#13151C"} borderRadius={25}>
      <TodoForm addTodo={addTodo}>
        {todos.map((todo, index) => {
          return <Todo task={todo.task} key={index} />;
        })}
      </TodoForm>
    </GridItem>
  );
};

export default TodoList;
// console.log(todos);
