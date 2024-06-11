import * as graphql from "@nestjs/graphql";
import { AccountingResolverBase } from "./base/accounting.resolver.base";
import { Accounting } from "./base/Accounting";
import { AccountingService } from "./accounting.service";

@graphql.Resolver(() => Accounting)
export class AccountingResolver extends AccountingResolverBase {
  constructor(protected readonly service: AccountingService) {
    super(service);
  }
}
