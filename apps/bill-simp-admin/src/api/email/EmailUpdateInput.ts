import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmailUpdateInput = {
  attachments?: InputJsonValue;
  body?: string | null;
  emailAddress?: string | null;
  sentDate?: Date | null;
  status?: "Option1" | null;
  subject?: string | null;
  user?: UserWhereUniqueInput | null;
};
