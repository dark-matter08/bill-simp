import { Statement as TStatement } from "../api/statement/Statement";

export const STATEMENT_TITLE_FIELD = "client";

export const StatementTitle = (record: TStatement): string => {
  return record.client?.toString() || String(record.id);
};
