import { InputJsonValue } from "../../types";

export type InvoiceCreateInput = {
  amount?: number | null;
  customer?: string | null;
  description?: string | null;
  dueDate?: Date | null;
  invoiceDate?: Date | null;
  invoiceNumber?: string | null;
  items?: InputJsonValue;
  status?: "Option1" | null;
};
