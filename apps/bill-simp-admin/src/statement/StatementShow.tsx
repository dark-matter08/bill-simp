import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const StatementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="client" source="client" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="startDate" source="startDate" />
        <TextField label="statementDate" source="statementDate" />
        <TextField label="statementNumber" source="statementNumber" />
        <TextField label="totalAmount" source="totalAmount" />
        <TextField label="transactions" source="transactions" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
