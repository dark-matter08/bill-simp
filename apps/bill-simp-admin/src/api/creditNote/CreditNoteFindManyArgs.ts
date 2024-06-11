import { CreditNoteWhereInput } from "./CreditNoteWhereInput";
import { CreditNoteOrderByInput } from "./CreditNoteOrderByInput";

export type CreditNoteFindManyArgs = {
  where?: CreditNoteWhereInput;
  orderBy?: Array<CreditNoteOrderByInput>;
  skip?: number;
  take?: number;
};
