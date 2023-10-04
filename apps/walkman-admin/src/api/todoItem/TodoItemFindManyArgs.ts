import { TodoItemWhereInput } from "./TodoItemWhereInput";
import { TodoItemOrderByInput } from "./TodoItemOrderByInput";

export type TodoItemFindManyArgs = {
  where?: TodoItemWhereInput;
  orderBy?: Array<TodoItemOrderByInput>;
  skip?: number;
  take?: number;
};
