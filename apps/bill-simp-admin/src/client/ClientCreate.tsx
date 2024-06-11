import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ClientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="businessName" source="businessName" />
        <TextInput label="contactPerson" source="contactPerson" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
