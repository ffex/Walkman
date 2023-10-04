import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TodoItemTitle } from "../todoItem/TodoItemTitle";

export const TodoListCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <ReferenceArrayInput
          source="todoItems"
          reference="TodoItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TodoItemTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
