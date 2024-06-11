import { RecurringInvoice as TRecurringInvoice } from "../api/recurringInvoice/RecurringInvoice";

export const RECURRINGINVOICE_TITLE_FIELD = "client";

export const RecurringInvoiceTitle = (record: TRecurringInvoice): string => {
  return record.client?.toString() || String(record.id);
};
