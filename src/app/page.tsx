"use client";

import Navbar from "@/components/Navbar";
import TodoList from "@/components/TodoList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className=" bg-base-100">
        <TodoList />
      </main>
      <Footer />
    </div>
  );
}
