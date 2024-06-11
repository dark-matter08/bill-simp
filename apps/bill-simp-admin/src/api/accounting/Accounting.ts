export type Accounting = {
  amount: number | null;
  category: string | null;
  createdAt: Date;
  description: string | null;
  entryDate: Date | null;
  id: string;
  incomeOrExpense?: "Option1" | null;
  updatedAt: Date;
  user: string | null;
};
