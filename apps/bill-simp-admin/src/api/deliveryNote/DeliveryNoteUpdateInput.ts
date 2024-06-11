import { InputJsonValue } from "../../types";

export type DeliveryNoteUpdateInput = {
  address?: string | null;
  client?: string | null;
  deliveryDate?: Date | null;
  deliveryNoteNumber?: string | null;
  deliveryPerson?: string | null;
  items?: InputJsonValue;
  status?: "Option1" | null;
};
