import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StatementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Statements"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
