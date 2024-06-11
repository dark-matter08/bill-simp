import * as graphql from "@nestjs/graphql";
import { RecurringInvoiceResolverBase } from "./base/recurringInvoice.resolver.base";
import { RecurringInvoice } from "./base/RecurringInvoice";
import { RecurringInvoiceService } from "./recurringInvoice.service";

@graphql.Resolver(() => RecurringInvoice)
export class RecurringInvoiceResolver extends RecurringInvoiceResolverBase {
  constructor(protected readonly service: RecurringInvoiceService) {
    super(service);
  }
}
