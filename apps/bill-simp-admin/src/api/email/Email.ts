import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Email = {
  attachments: JsonValue;
  body: string | null;
  createdAt: Date;
  emailAddress: string | null;
  id: string;
  sentDate: Date | null;
  status?: "Option1" | null;
  subject: string | null;
  updatedAt: Date;
  user?: User | null;
};
