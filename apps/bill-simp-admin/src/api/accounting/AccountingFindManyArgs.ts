import { AccountingWhereInput } from "./AccountingWhereInput";
import { AccountingOrderByInput } from "./AccountingOrderByInput";

export type AccountingFindManyArgs = {
  where?: AccountingWhereInput;
  orderBy?: Array<AccountingOrderByInput>;
  skip?: number;
  take?: number;
};
