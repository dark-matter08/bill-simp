import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientWhereInput = {
  address?: StringNullableFilter;
  businessName?: StringNullableFilter;
  contactPerson?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  phone?: StringNullableFilter;
};
