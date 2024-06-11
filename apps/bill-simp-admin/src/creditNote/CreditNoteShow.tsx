import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CreditNoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <TextField label="client" source="client" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creditNoteDate" source="creditNoteDate" />
        <TextField label="creditNoteNumber" source="creditNoteNumber" />
        <TextField label="ID" source="id" />
        <TextField label="reason" source="reason" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User" source="user" />
      </SimpleShowLayout>
    </Show>
  );
};
