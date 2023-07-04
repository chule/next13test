import db from "@/utils/db";
import TodoList from "@/components/TodoList";

const getData = async () => {
  // await new Promise<void>((resolve, reject) => setTimeout(() => resolve(), 2000));
  const todos = await db.todo.findMany({});

  return todos;
};

const Todos = async () => {
  const todos = await getData();
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};

export default Todos;
