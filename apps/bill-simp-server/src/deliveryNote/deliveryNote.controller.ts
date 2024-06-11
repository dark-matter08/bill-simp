import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryNoteService } from "./deliveryNote.service";
import { DeliveryNoteControllerBase } from "./base/deliveryNote.controller.base";

@swagger.ApiTags("deliveryNotes")
@common.Controller("deliveryNotes")
export class DeliveryNoteController extends DeliveryNoteControllerBase {
  constructor(protected readonly service: DeliveryNoteService) {
    super(service);
  }
}
