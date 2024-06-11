import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EmailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="attachments" source="attachments" />
        <TextField label="body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="emailAddress" source="emailAddress" />
        <TextField label="ID" source="id" />
        <TextField label="sentDate" source="sentDate" />
        <TextField label="status" source="status" />
        <TextField label="subject" source="subject" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
