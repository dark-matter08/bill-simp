import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountingServiceBase } from "./base/accounting.service.base";

@Injectable()
export class AccountingService extends AccountingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
