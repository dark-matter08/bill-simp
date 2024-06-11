import { Quotation as TQuotation } from "../api/quotation/Quotation";

export const QUOTATION_TITLE_FIELD = "client";

export const QuotationTitle = (record: TQuotation): string => {
  return record.client?.toString() || String(record.id);
};
