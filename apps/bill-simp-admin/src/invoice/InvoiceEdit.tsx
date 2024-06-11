import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const InvoiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="customer" source="customer" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <DateTimeInput label="invoiceDate" source="invoiceDate" />
        <TextInput label="invoiceNumber" source="invoiceNumber" />
        <div />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
