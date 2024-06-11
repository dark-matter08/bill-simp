import { SortOrder } from "../../util/SortOrder";

export type CreditNoteOrderByInput = {
  amount?: SortOrder;
  client?: SortOrder;
  createdAt?: SortOrder;
  creditNoteDate?: SortOrder;
  creditNoteNumber?: SortOrder;
  id?: SortOrder;
  reason?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
