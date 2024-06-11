import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const QuotationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="client" source="client" />
        <TextInput label="description" multiline source="description" />
        <div />
        <DateTimeInput label="quotationDate" source="quotationDate" />
        <TextInput label="quotationNumber" source="quotationNumber" />
        <NumberInput label="total" source="total" />
        <DateTimeInput label="validUntil" source="validUntil" />
      </SimpleForm>
    </Edit>
  );
};
