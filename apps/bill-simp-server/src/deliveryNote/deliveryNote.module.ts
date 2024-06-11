import { Module } from "@nestjs/common";
import { DeliveryNoteModuleBase } from "./base/deliveryNote.module.base";
import { DeliveryNoteService } from "./deliveryNote.service";
import { DeliveryNoteController } from "./deliveryNote.controller";
import { DeliveryNoteResolver } from "./deliveryNote.resolver";

@Module({
  imports: [DeliveryNoteModuleBase],
  controllers: [DeliveryNoteController],
  providers: [DeliveryNoteService, DeliveryNoteResolver],
  exports: [DeliveryNoteService],
})
export class DeliveryNoteModule {}
