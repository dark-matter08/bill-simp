import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreditNoteServiceBase } from "./base/creditNote.service.base";

@Injectable()
export class CreditNoteService extends CreditNoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
