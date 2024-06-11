import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  customer?: StringNullableFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  invoiceDate?: DateTimeNullableFilter;
  invoiceNumber?: StringNullableFilter;
  items?: JsonFilter;
  status?: "Option1";
};
