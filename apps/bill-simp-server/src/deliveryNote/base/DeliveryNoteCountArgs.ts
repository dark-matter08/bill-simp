/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DeliveryNoteWhereInput } from "./DeliveryNoteWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class DeliveryNoteCountArgs {
  @ApiProperty({
    required: false,
    type: () => DeliveryNoteWhereInput,
  })
  @Field(() => DeliveryNoteWhereInput, { nullable: true })
  @Type(() => DeliveryNoteWhereInput)
  where?: DeliveryNoteWhereInput;
}

export { DeliveryNoteCountArgs as DeliveryNoteCountArgs };
