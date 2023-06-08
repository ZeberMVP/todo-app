"use client";

import Navbar from "@/components/Navbar";
import TodoList from "@/components/TodoList";

export default function Home() {
  const todos = [
    {
      title: "Tarea 1",
      checked: false,
    },
    { title: "Tarea 2", checked: false },
    { title: "Tarea 3", checked: false },
  ];

  return (
    <div>
      <Navbar />
      <main>
        <TodoList todos={todos} />
      </main>
    </div>
  );
}
