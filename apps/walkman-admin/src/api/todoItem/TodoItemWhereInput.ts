import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TodoItemWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
};
