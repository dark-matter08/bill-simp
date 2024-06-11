import { Module } from "@nestjs/common";
import { AccountingModuleBase } from "./base/accounting.module.base";
import { AccountingService } from "./accounting.service";
import { AccountingController } from "./accounting.controller";
import { AccountingResolver } from "./accounting.resolver";

@Module({
  imports: [AccountingModuleBase],
  controllers: [AccountingController],
  providers: [AccountingService, AccountingResolver],
  exports: [AccountingService],
})
export class AccountingModule {}
