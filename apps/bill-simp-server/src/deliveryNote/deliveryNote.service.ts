import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryNoteServiceBase } from "./base/deliveryNote.service.base";

@Injectable()
export class DeliveryNoteService extends DeliveryNoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
