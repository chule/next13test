"use client";

import { useTransition } from "react";
import { completeTodo, removeTodo } from "@/utils/actions";

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div className="flex border  border-black/20 ">
      <div
        className={`w-4/5 cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
        onClick={() => startTransition(() => completeTodo(todo.id))}
      >
        {todo.content}
      </div>
      <button
     
        className="ps-4"
        onClick={() => startTransition(() => removeTodo(todo.id))}
      >
        remove
      </button>
    </div>
  );
};

export default Todo;
