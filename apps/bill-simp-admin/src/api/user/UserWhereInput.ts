import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmailListRelationFilter } from "../email/EmailListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  emails?: EmailListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
