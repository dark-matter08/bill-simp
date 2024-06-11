import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmailWhereInput = {
  attachments?: JsonFilter;
  body?: StringNullableFilter;
  emailAddress?: StringNullableFilter;
  id?: StringFilter;
  sentDate?: DateTimeNullableFilter;
  status?: "Option1";
  subject?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
