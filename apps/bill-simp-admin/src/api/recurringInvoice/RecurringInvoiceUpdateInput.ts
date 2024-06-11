export type RecurringInvoiceUpdateInput = {
  amount?: number | null;
  client?: string | null;
  description?: string | null;
  endDate?: Date | null;
  frequency?: string | null;
  recurringInvoiceNumber?: string | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  user?: string | null;
};
