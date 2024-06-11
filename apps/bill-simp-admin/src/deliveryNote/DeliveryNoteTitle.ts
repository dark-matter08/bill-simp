import { DeliveryNote as TDeliveryNote } from "../api/deliveryNote/DeliveryNote";

export const DELIVERYNOTE_TITLE_FIELD = "client";

export const DeliveryNoteTitle = (record: TDeliveryNote): string => {
  return record.client?.toString() || String(record.id);
};
