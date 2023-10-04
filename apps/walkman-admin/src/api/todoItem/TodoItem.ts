import { TodoList } from "../todoList/TodoList";

export type TodoItem = {
  createdAt: Date;
  id: string;
  listId?: TodoList;
  text: string | null;
  updatedAt: Date;
};
