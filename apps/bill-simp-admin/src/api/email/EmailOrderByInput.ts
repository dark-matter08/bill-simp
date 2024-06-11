import { SortOrder } from "../../util/SortOrder";

export type EmailOrderByInput = {
  attachments?: SortOrder;
  body?: SortOrder;
  createdAt?: SortOrder;
  emailAddress?: SortOrder;
  id?: SortOrder;
  sentDate?: SortOrder;
  status?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
