import { CreditNote as TCreditNote } from "../api/creditNote/CreditNote";

export const CREDITNOTE_TITLE_FIELD = "client";

export const CreditNoteTitle = (record: TCreditNote): string => {
  return record.client?.toString() || String(record.id);
};
