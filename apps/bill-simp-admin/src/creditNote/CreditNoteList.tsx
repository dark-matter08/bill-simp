import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CreditNoteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CreditNotes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
