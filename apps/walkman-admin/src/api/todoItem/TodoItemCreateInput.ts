import { TodoListWhereUniqueInput } from "../todoList/TodoListWhereUniqueInput";

export type TodoItemCreateInput = {
  listId: TodoListWhereUniqueInput;
  text?: string | null;
};
