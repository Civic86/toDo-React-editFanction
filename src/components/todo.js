import React, { useState } from "react";

function Todo({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        todo.text
      )}
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
      {isEditing ? (
        <button onClick={handleSave}>save</button>
      ) : (
        <button onClick={handleEdit}>edit</button>
      )}
    </div>
  );
}

export default Todo;
