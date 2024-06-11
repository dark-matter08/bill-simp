import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type DeliveryNoteWhereInput = {
  address?: StringNullableFilter;
  client?: StringNullableFilter;
  deliveryDate?: DateTimeNullableFilter;
  deliveryNoteNumber?: StringNullableFilter;
  deliveryPerson?: StringNullableFilter;
  id?: StringFilter;
  items?: JsonFilter;
  status?: "Option1";
};
