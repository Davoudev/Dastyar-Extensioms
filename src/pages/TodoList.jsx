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

  const toggleComplete = (id) => {
    console.log("hello");
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <GridItem colSpan={3} rowSpan={14} bg={"#13151C"} borderRadius={25}>
      <TodoForm addTodo={addTodo}>
        {todos.map((todo, index) => {
          return (
            <Todo
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </TodoForm>
    </GridItem>
  );
};

export default TodoList;
// console.log(todos);
