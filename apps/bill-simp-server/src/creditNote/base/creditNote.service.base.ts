/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CreditNote as PrismaCreditNote } from "@prisma/client";

export class CreditNoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CreditNoteCountArgs, "select">
  ): Promise<number> {
    return this.prisma.creditNote.count(args);
  }

  async creditNotes<T extends Prisma.CreditNoteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditNoteFindManyArgs>
  ): Promise<PrismaCreditNote[]> {
    return this.prisma.creditNote.findMany<Prisma.CreditNoteFindManyArgs>(args);
  }
  async creditNote<T extends Prisma.CreditNoteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditNoteFindUniqueArgs>
  ): Promise<PrismaCreditNote | null> {
    return this.prisma.creditNote.findUnique(args);
  }
  async createCreditNote<T extends Prisma.CreditNoteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditNoteCreateArgs>
  ): Promise<PrismaCreditNote> {
    return this.prisma.creditNote.create<T>(args);
  }
  async updateCreditNote<T extends Prisma.CreditNoteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditNoteUpdateArgs>
  ): Promise<PrismaCreditNote> {
    return this.prisma.creditNote.update<T>(args);
  }
  async deleteCreditNote<T extends Prisma.CreditNoteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditNoteDeleteArgs>
  ): Promise<PrismaCreditNote> {
    return this.prisma.creditNote.delete(args);
  }
}