export type CreditNoteCreateInput = {
  amount?: number | null;
  client?: string | null;
  creditNoteDate?: Date | null;
  creditNoteNumber?: string | null;
  reason?: string | null;
  status?: "Option1" | null;
  user?: string | null;
};
