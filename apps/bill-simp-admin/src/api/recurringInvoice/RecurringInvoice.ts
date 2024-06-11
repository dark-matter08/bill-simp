export type RecurringInvoice = {
  amount: number | null;
  client: string | null;
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  frequency: string | null;
  id: string;
  recurringInvoiceNumber: string | null;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user: string | null;
};
