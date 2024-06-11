import * as graphql from "@nestjs/graphql";
import { DeliveryNoteResolverBase } from "./base/deliveryNote.resolver.base";
import { DeliveryNote } from "./base/DeliveryNote";
import { DeliveryNoteService } from "./deliveryNote.service";

@graphql.Resolver(() => DeliveryNote)
export class DeliveryNoteResolver extends DeliveryNoteResolverBase {
  constructor(protected readonly service: DeliveryNoteService) {
    super(service);
  }
}
