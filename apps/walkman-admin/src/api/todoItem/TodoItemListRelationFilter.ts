import { TodoItemWhereInput } from "./TodoItemWhereInput";

export type TodoItemListRelationFilter = {
  every?: TodoItemWhereInput;
  some?: TodoItemWhereInput;
  none?: TodoItemWhereInput;
};
