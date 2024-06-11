import { InputJsonValue } from "../../types";

export type QuotationUpdateInput = {
  client?: string | null;
  description?: string | null;
  items?: InputJsonValue;
  quotationDate?: Date | null;
  quotationNumber?: string | null;
  total?: number | null;
  validUntil?: Date | null;
};
