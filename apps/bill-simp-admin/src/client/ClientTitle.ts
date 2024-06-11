import { Client as TClient } from "../api/client/Client";

export const CLIENT_TITLE_FIELD = "businessName";

export const ClientTitle = (record: TClient): string => {
  return record.businessName?.toString() || String(record.id);
};
