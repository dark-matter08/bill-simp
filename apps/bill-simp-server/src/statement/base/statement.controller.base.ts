/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StatementService } from "../statement.service";
import { StatementCreateInput } from "./StatementCreateInput";
import { Statement } from "./Statement";
import { StatementFindManyArgs } from "./StatementFindManyArgs";
import { StatementWhereUniqueInput } from "./StatementWhereUniqueInput";
import { StatementUpdateInput } from "./StatementUpdateInput";

export class StatementControllerBase {
  constructor(protected readonly service: StatementService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Statement })
  async createStatement(
    @common.Body() data: StatementCreateInput
  ): Promise<Statement> {
    return await this.service.createStatement({
      data: data,
      select: {
        client: true,
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        startDate: true,
        statementDate: true,
        statementNumber: true,
        totalAmount: true,
        transactions: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Statement] })
  @ApiNestedQuery(StatementFindManyArgs)
  async statements(@common.Req() request: Request): Promise<Statement[]> {
    const args = plainToClass(StatementFindManyArgs, request.query);
    return this.service.statements({
      ...args,
      select: {
        client: true,
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        startDate: true,
        statementDate: true,
        statementNumber: true,
        totalAmount: true,
        transactions: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Statement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async statement(
    @common.Param() params: StatementWhereUniqueInput
  ): Promise<Statement | null> {
    const result = await this.service.statement({
      where: params,
      select: {
        client: true,
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        startDate: true,
        statementDate: true,
        statementNumber: true,
        totalAmount: true,
        transactions: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Statement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStatement(
    @common.Param() params: StatementWhereUniqueInput,
    @common.Body() data: StatementUpdateInput
  ): Promise<Statement | null> {
    try {
      return await this.service.updateStatement({
        where: params,
        data: data,
        select: {
          client: true,
          createdAt: true,
          description: true,
          endDate: true,
          id: true,
          startDate: true,
          statementDate: true,
          statementNumber: true,
          totalAmount: true,
          transactions: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Statement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStatement(
    @common.Param() params: StatementWhereUniqueInput
  ): Promise<Statement | null> {
    try {
      return await this.service.deleteStatement({
        where: params,
        select: {
          client: true,
          createdAt: true,
          description: true,
          endDate: true,
          id: true,
          startDate: true,
          statementDate: true,
          statementNumber: true,
          totalAmount: true,
          transactions: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
