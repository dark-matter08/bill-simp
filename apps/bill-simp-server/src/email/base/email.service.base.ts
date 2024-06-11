/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Email as PrismaEmail,
  User as PrismaUser,
} from "@prisma/client";

export class EmailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.EmailCountArgs, "select">): Promise<number> {
    return this.prisma.email.count(args);
  }

  async emails<T extends Prisma.EmailFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailFindManyArgs>
  ): Promise<PrismaEmail[]> {
    return this.prisma.email.findMany<Prisma.EmailFindManyArgs>(args);
  }
  async email<T extends Prisma.EmailFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailFindUniqueArgs>
  ): Promise<PrismaEmail | null> {
    return this.prisma.email.findUnique(args);
  }
  async createEmail<T extends Prisma.EmailCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailCreateArgs>
  ): Promise<PrismaEmail> {
    return this.prisma.email.create<T>(args);
  }
  async updateEmail<T extends Prisma.EmailUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailUpdateArgs>
  ): Promise<PrismaEmail> {
    return this.prisma.email.update<T>(args);
  }
  async deleteEmail<T extends Prisma.EmailDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailDeleteArgs>
  ): Promise<PrismaEmail> {
    return this.prisma.email.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.email
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
