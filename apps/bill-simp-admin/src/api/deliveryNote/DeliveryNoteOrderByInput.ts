import { SortOrder } from "../../util/SortOrder";

export type DeliveryNoteOrderByInput = {
  address?: SortOrder;
  client?: SortOrder;
  createdAt?: SortOrder;
  deliveryDate?: SortOrder;
  deliveryNoteNumber?: SortOrder;
  deliveryPerson?: SortOrder;
  id?: SortOrder;
  items?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
