import { TodoItem } from "../todoItem/TodoItem";

export type TodoList = {
  createdAt: Date;
  id: string;
  title: string | null;
  todoItems?: Array<TodoItem>;
  updatedAt: Date;
};
