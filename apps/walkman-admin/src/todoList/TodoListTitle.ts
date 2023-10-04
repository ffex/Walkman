import { TodoList as TTodoList } from "../api/todoList/TodoList";

export const TODOLIST_TITLE_FIELD = "title";

export const TodoListTitle = (record: TTodoList): string => {
  return record.title?.toString() || String(record.id);
};
