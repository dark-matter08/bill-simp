import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AccountingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="entryDate" source="entryDate" />
        <TextField label="ID" source="id" />
        <TextField label="incomeOrExpense" source="incomeOrExpense" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User" source="user" />
      </SimpleShowLayout>
    </Show>
  );
};
