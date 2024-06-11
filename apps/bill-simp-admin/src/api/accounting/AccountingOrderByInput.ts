import { SortOrder } from "../../util/SortOrder";

export type AccountingOrderByInput = {
  amount?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  entryDate?: SortOrder;
  id?: SortOrder;
  incomeOrExpense?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
