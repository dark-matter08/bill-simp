import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const CreditNoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="client" source="client" />
        <DateTimeInput label="creditNoteDate" source="creditNoteDate" />
        <TextInput label="creditNoteNumber" source="creditNoteNumber" />
        <TextInput label="reason" multiline source="reason" />
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
    </Create>
  );
};
