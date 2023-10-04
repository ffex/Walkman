import { TodoListWhereUniqueInput } from "../todoList/TodoListWhereUniqueInput";

export type TodoItemUpdateInput = {
  listId?: TodoListWhereUniqueInput;
  text?: string | null;
};
