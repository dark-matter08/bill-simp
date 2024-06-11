import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreditNoteService } from "./creditNote.service";
import { CreditNoteControllerBase } from "./base/creditNote.controller.base";

@swagger.ApiTags("creditNotes")
@common.Controller("creditNotes")
export class CreditNoteController extends CreditNoteControllerBase {
  constructor(protected readonly service: CreditNoteService) {
    super(service);
  }
}
