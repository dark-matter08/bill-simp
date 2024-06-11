import { Module } from "@nestjs/common";
import { RecurringInvoiceModuleBase } from "./base/recurringInvoice.module.base";
import { RecurringInvoiceService } from "./recurringInvoice.service";
import { RecurringInvoiceController } from "./recurringInvoice.controller";
import { RecurringInvoiceResolver } from "./recurringInvoice.resolver";

@Module({
  imports: [RecurringInvoiceModuleBase],
  controllers: [RecurringInvoiceController],
  providers: [RecurringInvoiceService, RecurringInvoiceResolver],
  exports: [RecurringInvoiceService],
})
export class RecurringInvoiceModule {}
