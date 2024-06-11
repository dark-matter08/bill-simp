import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountingWhereInput = {
  amount?: FloatNullableFilter;
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  entryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  incomeOrExpense?: "Option1";
  user?: StringNullableFilter;
};
