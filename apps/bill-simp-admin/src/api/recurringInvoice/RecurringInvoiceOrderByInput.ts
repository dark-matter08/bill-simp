import { SortOrder } from "../../util/SortOrder";

export type RecurringInvoiceOrderByInput = {
  amount?: SortOrder;
  client?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  frequency?: SortOrder;
  id?: SortOrder;
  recurringInvoiceNumber?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
