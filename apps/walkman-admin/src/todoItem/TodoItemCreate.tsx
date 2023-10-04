import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { TodoListTitle } from "../todoList/TodoListTitle";

export const TodoItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="listId.id"
          reference="TodoList"
          label="ItemListId"
        >
          <SelectInput optionText={TodoListTitle} />
        </ReferenceInput>
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Create>
  );
};
