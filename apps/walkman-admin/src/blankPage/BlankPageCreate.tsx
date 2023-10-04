import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BlankPageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Text" multiline source="text" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
