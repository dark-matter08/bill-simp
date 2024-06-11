import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ClientEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="businessName" source="businessName" />
        <TextInput label="contactPerson" source="contactPerson" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Edit>
  );
};
