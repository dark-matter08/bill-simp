export type CreditNote = {
  amount: number | null;
  client: string | null;
  createdAt: Date;
  creditNoteDate: Date | null;
  creditNoteNumber: string | null;
  id: string;
  reason: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user: string | null;
};
