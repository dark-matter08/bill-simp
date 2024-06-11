import { JsonValue } from "type-fest";

export type DeliveryNote = {
  address: string | null;
  client: string | null;
  createdAt: Date;
  deliveryDate: Date | null;
  deliveryNoteNumber: string | null;
  deliveryPerson: string | null;
  id: string;
  items: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
};
