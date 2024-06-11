import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const QuotationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="client" source="client" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="items" source="items" />
        <TextField label="quotationDate" source="quotationDate" />
        <TextField label="quotationNumber" source="quotationNumber" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="validUntil" source="validUntil" />
      </SimpleShowLayout>
    </Show>
  );
};
