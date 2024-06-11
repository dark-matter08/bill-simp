import { JsonValue } from "type-fest";

export type Statement = {
  client: string | null;
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  statementDate: Date | null;
  statementNumber: string | null;
  totalAmount: number | null;
  transactions: JsonValue;
  updatedAt: Date;
};
