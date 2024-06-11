import { Email } from "../email/Email";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  emails?: Array<Email>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
