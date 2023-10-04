import { TodoItemWhereUniqueInput } from "./TodoItemWhereUniqueInput";
import { TodoItemUpdateInput } from "./TodoItemUpdateInput";

export type UpdateTodoItemArgs = {
  where: TodoItemWhereUniqueInput;
  data: TodoItemUpdateInput;
};
