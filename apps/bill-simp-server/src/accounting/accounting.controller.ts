import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountingService } from "./accounting.service";
import { AccountingControllerBase } from "./base/accounting.controller.base";

@swagger.ApiTags("accountings")
@common.Controller("accountings")
export class AccountingController extends AccountingControllerBase {
  constructor(protected readonly service: AccountingService) {
    super(service);
  }
}
