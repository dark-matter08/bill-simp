import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecurringInvoiceService } from "./recurringInvoice.service";
import { RecurringInvoiceControllerBase } from "./base/recurringInvoice.controller.base";

@swagger.ApiTags("recurringInvoices")
@common.Controller("recurringInvoices")
export class RecurringInvoiceController extends RecurringInvoiceControllerBase {
  constructor(protected readonly service: RecurringInvoiceService) {
    super(service);
  }
}
