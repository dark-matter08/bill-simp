export type AccountingCreateInput = {
  amount?: number | null;
  category?: string | null;
  description?: string | null;
  entryDate?: Date | null;
  incomeOrExpense?: "Option1" | null;
  user?: string | null;
};
