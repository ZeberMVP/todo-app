"use client";

import { useState } from "react";
import Todo, { TodoProps } from "@/components/Todo";
import { nanoid } from "nanoid";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  function addTodo() {
    const id = nanoid();
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        title: "New task",
        checked: false,
        id,
        onDelete: () => handleDelete(id),
      },
    ]);
  }

  function handleDelete(id: string) {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      return updatedTodos;
    });
  }

  return (
    <div>
      <div className="w-full bg-secondary items-center flex">
        <button className="btn btn-ghost text-3xl w-full" onClick={addTodo}>
          +
        </button>
      </div>

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          checked={todo.checked}
          onDelete={() => handleDelete(todo.id)}
          id={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
