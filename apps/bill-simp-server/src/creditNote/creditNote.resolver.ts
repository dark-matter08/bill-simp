import * as graphql from "@nestjs/graphql";
import { CreditNoteResolverBase } from "./base/creditNote.resolver.base";
import { CreditNote } from "./base/CreditNote";
import { CreditNoteService } from "./creditNote.service";

@graphql.Resolver(() => CreditNote)
export class CreditNoteResolver extends CreditNoteResolverBase {
  constructor(protected readonly service: CreditNoteService) {
    super(service);
  }
}
