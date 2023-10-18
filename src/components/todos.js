import React from "react";
import Todo from "./todo";

function Todos({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default Todos;
