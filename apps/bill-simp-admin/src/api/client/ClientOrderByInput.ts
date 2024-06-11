import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  address?: SortOrder;
  businessName?: SortOrder;
  contactPerson?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
