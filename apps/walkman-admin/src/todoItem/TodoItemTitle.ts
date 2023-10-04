import { TodoItem as TTodoItem } from "../api/todoItem/TodoItem";

export const TODOITEM_TITLE_FIELD = "text";

export const TodoItemTitle = (record: TTodoItem): string => {
  return record.text?.toString() || String(record.id);
};
