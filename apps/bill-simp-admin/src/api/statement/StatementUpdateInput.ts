import { InputJsonValue } from "../../types";

export type StatementUpdateInput = {
  client?: string | null;
  description?: string | null;
  endDate?: Date | null;
  startDate?: Date | null;
  statementDate?: Date | null;
  statementNumber?: string | null;
  totalAmount?: number | null;
  transactions?: InputJsonValue;
};
