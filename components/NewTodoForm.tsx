"use client";
import { newTodo } from "@/utils/actions";
import { useState } from "react";

const NewTodoForm = ({}) => {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <form>
        <input
          value={todo}
          name="content"
          type="text"
          className="border border-black/25"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          className="border border-black/25 rounded-md"
          disabled={todo === ""}
          type="submit"
          onClick={() => {
            newTodo(todo);
            setTodo("");
          }}
        >
          new todo
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
