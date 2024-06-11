import { RecurringInvoiceWhereInput } from "./RecurringInvoiceWhereInput";
import { RecurringInvoiceOrderByInput } from "./RecurringInvoiceOrderByInput";

export type RecurringInvoiceFindManyArgs = {
  where?: RecurringInvoiceWhereInput;
  orderBy?: Array<RecurringInvoiceOrderByInput>;
  skip?: number;
  take?: number;
};
