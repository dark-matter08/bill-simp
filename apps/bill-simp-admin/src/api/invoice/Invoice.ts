import { JsonValue } from "type-fest";

export type Invoice = {
  amount: number | null;
  createdAt: Date;
  customer: string | null;
  description: string | null;
  dueDate: Date | null;
  id: string;
  invoiceDate: Date | null;
  invoiceNumber: string | null;
  items: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
};
