import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const StatementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="client" source="client" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <DateTimeInput label="startDate" source="startDate" />
        <DateTimeInput label="statementDate" source="statementDate" />
        <TextInput label="statementNumber" source="statementNumber" />
        <NumberInput label="totalAmount" source="totalAmount" />
        <div />
      </SimpleForm>
    </Create>
  );
};
