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

export const AccountingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="category" source="category" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="entryDate" source="entryDate" />
        <SelectInput
          source="incomeOrExpense"
          label="incomeOrExpense"
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
