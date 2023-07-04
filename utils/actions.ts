"use server";
import db from "@/utils/db";
import { revalidatePath } from "next/cache";

export const newTodo = async (newTodo: string) => {
  const todo = await db.todo.create({
    data: {
      content: newTodo,
    },
  });
  revalidatePath("/todos");
};

export const completeTodo = async (id: string) => {

  await db.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  });
  revalidatePath("/todos");
};

export const removeTodo = async (id: string) => {

  await db.todo.delete({
    where: { id },
  });
  revalidatePath("/todos");
};
