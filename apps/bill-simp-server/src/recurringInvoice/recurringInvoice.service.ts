import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecurringInvoiceServiceBase } from "./base/recurringInvoice.service.base";

@Injectable()
export class RecurringInvoiceService extends RecurringInvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
