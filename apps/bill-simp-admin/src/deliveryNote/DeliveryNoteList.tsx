import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DeliveryNoteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DeliveryNotes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
