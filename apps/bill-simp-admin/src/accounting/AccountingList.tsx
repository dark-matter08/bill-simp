import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AccountingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accountings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="amount" source="amount" />
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="entryDate" source="entryDate" />
        <TextField label="ID" source="id" />
        <TextField label="incomeOrExpense" source="incomeOrExpense" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="User" source="user" />
      </Datagrid>
    </List>
  );
};
