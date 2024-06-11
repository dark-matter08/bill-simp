import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreditNoteWhereInput = {
  amount?: FloatNullableFilter;
  client?: StringNullableFilter;
  creditNoteDate?: DateTimeNullableFilter;
  creditNoteNumber?: StringNullableFilter;
  id?: StringFilter;
  reason?: StringNullableFilter;
  status?: "Option1";
  user?: StringNullableFilter;
};
