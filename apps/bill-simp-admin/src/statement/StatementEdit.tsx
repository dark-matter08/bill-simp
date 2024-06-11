import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const StatementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
