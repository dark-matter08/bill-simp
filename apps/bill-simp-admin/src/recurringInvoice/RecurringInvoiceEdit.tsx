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

export const RecurringInvoiceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="client" source="client" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="frequency" source="frequency" />
        <TextInput
          label="recurringInvoiceNumber"
          source="recurringInvoiceNumber"
        />
        <DateTimeInput label="startDate" source="startDate" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Edit>
  );
};
