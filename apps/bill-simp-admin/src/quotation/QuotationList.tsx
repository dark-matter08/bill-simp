import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const QuotationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Quotations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
