import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "customer";

export const InvoiceTitle = (record: TInvoice): string => {
  return record.customer?.toString() || String(record.id);
};
