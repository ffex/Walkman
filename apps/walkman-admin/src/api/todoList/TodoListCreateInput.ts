import { TodoItemCreateNestedManyWithoutTodoListsInput } from "./TodoItemCreateNestedManyWithoutTodoListsInput";

export type TodoListCreateInput = {
  title?: string | null;
  todoItems?: TodoItemCreateNestedManyWithoutTodoListsInput;
};
