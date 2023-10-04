import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TodoItemListRelationFilter } from "../todoItem/TodoItemListRelationFilter";

export type TodoListWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  todoItems?: TodoItemListRelationFilter;
};
