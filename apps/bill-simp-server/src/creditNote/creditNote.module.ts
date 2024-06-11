import { Module } from "@nestjs/common";
import { CreditNoteModuleBase } from "./base/creditNote.module.base";
import { CreditNoteService } from "./creditNote.service";
import { CreditNoteController } from "./creditNote.controller";
import { CreditNoteResolver } from "./creditNote.resolver";

@Module({
  imports: [CreditNoteModuleBase],
  controllers: [CreditNoteController],
  providers: [CreditNoteService, CreditNoteResolver],
  exports: [CreditNoteService],
})
export class CreditNoteModule {}
