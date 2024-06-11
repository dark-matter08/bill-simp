import { JsonValue } from "type-fest";

export type Quotation = {
  client: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  items: JsonValue;
  quotationDate: Date | null;
  quotationNumber: string | null;
  total: number | null;
  updatedAt: Date;
  validUntil: Date | null;
};
