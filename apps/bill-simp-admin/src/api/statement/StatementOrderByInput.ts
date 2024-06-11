import { SortOrder } from "../../util/SortOrder";

export type StatementOrderByInput = {
  client?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  statementDate?: SortOrder;
  statementNumber?: SortOrder;
  totalAmount?: SortOrder;
  transactions?: SortOrder;
  updatedAt?: SortOrder;
};
