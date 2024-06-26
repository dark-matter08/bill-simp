/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Accounting } from "./Accounting";
import { AccountingCountArgs } from "./AccountingCountArgs";
import { AccountingFindManyArgs } from "./AccountingFindManyArgs";
import { AccountingFindUniqueArgs } from "./AccountingFindUniqueArgs";
import { CreateAccountingArgs } from "./CreateAccountingArgs";
import { UpdateAccountingArgs } from "./UpdateAccountingArgs";
import { DeleteAccountingArgs } from "./DeleteAccountingArgs";
import { AccountingService } from "../accounting.service";
@graphql.Resolver(() => Accounting)
export class AccountingResolverBase {
  constructor(protected readonly service: AccountingService) {}

  async _accountingsMeta(
    @graphql.Args() args: AccountingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Accounting])
  async accountings(
    @graphql.Args() args: AccountingFindManyArgs
  ): Promise<Accounting[]> {
    return this.service.accountings(args);
  }

  @graphql.Query(() => Accounting, { nullable: true })
  async accounting(
    @graphql.Args() args: AccountingFindUniqueArgs
  ): Promise<Accounting | null> {
    const result = await this.service.accounting(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Accounting)
  async createAccounting(
    @graphql.Args() args: CreateAccountingArgs
  ): Promise<Accounting> {
    return await this.service.createAccounting({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Accounting)
  async updateAccounting(
    @graphql.Args() args: UpdateAccountingArgs
  ): Promise<Accounting | null> {
    try {
      return await this.service.updateAccounting({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Accounting)
  async deleteAccounting(
    @graphql.Args() args: DeleteAccountingArgs
  ): Promise<Accounting | null> {
    try {
      return await this.service.deleteAccounting(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
