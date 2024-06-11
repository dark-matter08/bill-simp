import { SortOrder } from "../../util/SortOrder";

export type QuotationOrderByInput = {
  client?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  items?: SortOrder;
  quotationDate?: SortOrder;
  quotationNumber?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
  validUntil?: SortOrder;
};
