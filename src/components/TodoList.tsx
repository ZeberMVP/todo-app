"use client";

import { useState } from "react";
import Todo, { TodoProps } from "@/components/Todo";
import { nanoid } from "nanoid";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "New task",
        checked: false,
      },
    ]);
  }

  return (
    <div>
      <div className="w-full bg-secondary items-center flex">
        <button className="btn btn-ghost text-3xl w-full" onClick={addTodo}>
          +
        </button>
      </div>

      {todos.map((todo) => (
        <Todo key={nanoid()} title={todo.title} checked={todo.checked} />
      ))}
    </div>
  );
};

export default TodoList;
