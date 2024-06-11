import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type QuotationWhereInput = {
  client?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  items?: JsonFilter;
  quotationDate?: DateTimeNullableFilter;
  quotationNumber?: StringNullableFilter;
  total?: FloatNullableFilter;
  validUntil?: DateTimeNullableFilter;
};
