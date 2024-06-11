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
import { DeliveryNoteService } from "../deliveryNote.service";
import { DeliveryNoteCreateInput } from "./DeliveryNoteCreateInput";
import { DeliveryNote } from "./DeliveryNote";
import { DeliveryNoteFindManyArgs } from "./DeliveryNoteFindManyArgs";
import { DeliveryNoteWhereUniqueInput } from "./DeliveryNoteWhereUniqueInput";
import { DeliveryNoteUpdateInput } from "./DeliveryNoteUpdateInput";

export class DeliveryNoteControllerBase {
  constructor(protected readonly service: DeliveryNoteService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DeliveryNote })
  async createDeliveryNote(
    @common.Body() data: DeliveryNoteCreateInput
  ): Promise<DeliveryNote> {
    return await this.service.createDeliveryNote({
      data: data,
      select: {
        address: true,
        client: true,
        createdAt: true,
        deliveryDate: true,
        deliveryNoteNumber: true,
        deliveryPerson: true,
        id: true,
        items: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DeliveryNote] })
  @ApiNestedQuery(DeliveryNoteFindManyArgs)
  async deliveryNotes(@common.Req() request: Request): Promise<DeliveryNote[]> {
    const args = plainToClass(DeliveryNoteFindManyArgs, request.query);
    return this.service.deliveryNotes({
      ...args,
      select: {
        address: true,
        client: true,
        createdAt: true,
        deliveryDate: true,
        deliveryNoteNumber: true,
        deliveryPerson: true,
        id: true,
        items: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DeliveryNote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deliveryNote(
    @common.Param() params: DeliveryNoteWhereUniqueInput
  ): Promise<DeliveryNote | null> {
    const result = await this.service.deliveryNote({
      where: params,
      select: {
        address: true,
        client: true,
        createdAt: true,
        deliveryDate: true,
        deliveryNoteNumber: true,
        deliveryPerson: true,
        id: true,
        items: true,
        status: true,
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
  @swagger.ApiOkResponse({ type: DeliveryNote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDeliveryNote(
    @common.Param() params: DeliveryNoteWhereUniqueInput,
    @common.Body() data: DeliveryNoteUpdateInput
  ): Promise<DeliveryNote | null> {
    try {
      return await this.service.updateDeliveryNote({
        where: params,
        data: data,
        select: {
          address: true,
          client: true,
          createdAt: true,
          deliveryDate: true,
          deliveryNoteNumber: true,
          deliveryPerson: true,
          id: true,
          items: true,
          status: true,
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
  @swagger.ApiOkResponse({ type: DeliveryNote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDeliveryNote(
    @common.Param() params: DeliveryNoteWhereUniqueInput
  ): Promise<DeliveryNote | null> {
    try {
      return await this.service.deleteDeliveryNote({
        where: params,
        select: {
          address: true,
          client: true,
          createdAt: true,
          deliveryDate: true,
          deliveryNoteNumber: true,
          deliveryPerson: true,
          id: true,
          items: true,
          status: true,
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