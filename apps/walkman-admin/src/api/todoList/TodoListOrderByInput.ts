import { SortOrder } from "../../util/SortOrder";

export type TodoListOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
