import { FC } from "react";
import Todo, { TodoProps } from "@/components/Todo";
import { nanoid } from "nanoid";

interface TodoListProps {
  todos: TodoProps[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={nanoid()} title={todo.title} checked={todo.checked} />
      ))}
    </div>
  );
};

export default TodoList;
