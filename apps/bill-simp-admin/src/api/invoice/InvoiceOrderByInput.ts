import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customer?: SortOrder;
  description?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  invoiceDate?: SortOrder;
  invoiceNumber?: SortOrder;
  items?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
