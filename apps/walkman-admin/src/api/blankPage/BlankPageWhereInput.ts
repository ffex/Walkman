import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BlankPageWhereInput = {
  id?: StringFilter;
  text?: StringNullableFilter;
  title?: StringNullableFilter;
};
