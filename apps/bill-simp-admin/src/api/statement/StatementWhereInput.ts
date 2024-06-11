import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type StatementWhereInput = {
  client?: StringNullableFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  statementDate?: DateTimeNullableFilter;
  statementNumber?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
  transactions?: JsonFilter;
};
