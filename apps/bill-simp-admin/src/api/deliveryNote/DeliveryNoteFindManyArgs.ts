import { DeliveryNoteWhereInput } from "./DeliveryNoteWhereInput";
import { DeliveryNoteOrderByInput } from "./DeliveryNoteOrderByInput";

export type DeliveryNoteFindManyArgs = {
  where?: DeliveryNoteWhereInput;
  orderBy?: Array<DeliveryNoteOrderByInput>;
  skip?: number;
  take?: number;
};
