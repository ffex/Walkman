import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BlankPageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Text" multiline source="text" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
