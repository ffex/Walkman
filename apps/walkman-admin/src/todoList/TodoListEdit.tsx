import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TodoItemTitle } from "../todoItem/TodoItemTitle";

export const TodoListEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
