/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, DeliveryNote as PrismaDeliveryNote } from "@prisma/client";

export class DeliveryNoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DeliveryNoteCountArgs, "select">
  ): Promise<number> {
    return this.prisma.deliveryNote.count(args);
  }

  async deliveryNotes<T extends Prisma.DeliveryNoteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeliveryNoteFindManyArgs>
  ): Promise<PrismaDeliveryNote[]> {
    return this.prisma.deliveryNote.findMany<Prisma.DeliveryNoteFindManyArgs>(
      args
    );
  }
  async deliveryNote<T extends Prisma.DeliveryNoteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeliveryNoteFindUniqueArgs>
  ): Promise<PrismaDeliveryNote | null> {
    return this.prisma.deliveryNote.findUnique(args);
  }
  async createDeliveryNote<T extends Prisma.DeliveryNoteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeliveryNoteCreateArgs>
  ): Promise<PrismaDeliveryNote> {
    return this.prisma.deliveryNote.create<T>(args);
  }
  async updateDeliveryNote<T extends Prisma.DeliveryNoteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeliveryNoteUpdateArgs>
  ): Promise<PrismaDeliveryNote> {
    return this.prisma.deliveryNote.update<T>(args);
  }
  async deleteDeliveryNote<T extends Prisma.DeliveryNoteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DeliveryNoteDeleteArgs>
  ): Promise<PrismaDeliveryNote> {
    return this.prisma.deliveryNote.delete(args);
  }
}
