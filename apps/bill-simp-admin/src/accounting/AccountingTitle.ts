import { Accounting as TAccounting } from "../api/accounting/Accounting";

export const ACCOUNTING_TITLE_FIELD = "category";

export const AccountingTitle = (record: TAccounting): string => {
  return record.category?.toString() || String(record.id);
};
