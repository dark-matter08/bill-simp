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
import { RecurringInvoice } from "./RecurringInvoice";
import { RecurringInvoiceCountArgs } from "./RecurringInvoiceCountArgs";
import { RecurringInvoiceFindManyArgs } from "./RecurringInvoiceFindManyArgs";
import { RecurringInvoiceFindUniqueArgs } from "./RecurringInvoiceFindUniqueArgs";
import { CreateRecurringInvoiceArgs } from "./CreateRecurringInvoiceArgs";
import { UpdateRecurringInvoiceArgs } from "./UpdateRecurringInvoiceArgs";
import { DeleteRecurringInvoiceArgs } from "./DeleteRecurringInvoiceArgs";
import { RecurringInvoiceService } from "../recurringInvoice.service";
@graphql.Resolver(() => RecurringInvoice)
export class RecurringInvoiceResolverBase {
  constructor(protected readonly service: RecurringInvoiceService) {}

  async _recurringInvoicesMeta(
    @graphql.Args() args: RecurringInvoiceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [RecurringInvoice])
  async recurringInvoices(
    @graphql.Args() args: RecurringInvoiceFindManyArgs
  ): Promise<RecurringInvoice[]> {
    return this.service.recurringInvoices(args);
  }

  @graphql.Query(() => RecurringInvoice, { nullable: true })
  async recurringInvoice(
    @graphql.Args() args: RecurringInvoiceFindUniqueArgs
  ): Promise<RecurringInvoice | null> {
    const result = await this.service.recurringInvoice(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => RecurringInvoice)
  async createRecurringInvoice(
    @graphql.Args() args: CreateRecurringInvoiceArgs
  ): Promise<RecurringInvoice> {
    return await this.service.createRecurringInvoice({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => RecurringInvoice)
  async updateRecurringInvoice(
    @graphql.Args() args: UpdateRecurringInvoiceArgs
  ): Promise<RecurringInvoice | null> {
    try {
      return await this.service.updateRecurringInvoice({
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

  @graphql.Mutation(() => RecurringInvoice)
  async deleteRecurringInvoice(
    @graphql.Args() args: DeleteRecurringInvoiceArgs
  ): Promise<RecurringInvoice | null> {
    try {
      return await this.service.deleteRecurringInvoice(args);
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
