import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const QuotationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="client" source="client" />
        <TextInput label="description" multiline source="description" />
        <div />
        <DateTimeInput label="quotationDate" source="quotationDate" />
        <TextInput label="quotationNumber" source="quotationNumber" />
        <NumberInput label="total" source="total" />
        <DateTimeInput label="validUntil" source="validUntil" />
      </SimpleForm>
    </Create>
  );
};
