import { TodoItemUpdateManyWithoutTodoListsInput } from "./TodoItemUpdateManyWithoutTodoListsInput";

export type TodoListUpdateInput = {
  title?: string | null;
  todoItems?: TodoItemUpdateManyWithoutTodoListsInput;
};
