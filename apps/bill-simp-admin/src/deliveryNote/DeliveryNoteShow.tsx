import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DeliveryNoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="client" source="client" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deliveryDate" source="deliveryDate" />
        <TextField label="deliveryNoteNumber" source="deliveryNoteNumber" />
        <TextField label="deliveryPerson" source="deliveryPerson" />
        <TextField label="ID" source="id" />
        <TextField label="items" source="items" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
