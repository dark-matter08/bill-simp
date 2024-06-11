import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RecurringInvoiceWhereInput = {
  amount?: FloatNullableFilter;
  client?: StringNullableFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  frequency?: StringNullableFilter;
  id?: StringFilter;
  recurringInvoiceNumber?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
  user?: StringNullableFilter;
};
