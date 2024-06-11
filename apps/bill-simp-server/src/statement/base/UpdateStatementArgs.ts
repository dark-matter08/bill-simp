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
import { StatementWhereUniqueInput } from "./StatementWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { StatementUpdateInput } from "./StatementUpdateInput";

@ArgsType()
class UpdateStatementArgs {
  @ApiProperty({
    required: true,
    type: () => StatementWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StatementWhereUniqueInput)
  @Field(() => StatementWhereUniqueInput, { nullable: false })
  where!: StatementWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => StatementUpdateInput,
  })
  @ValidateNested()
  @Type(() => StatementUpdateInput)
  @Field(() => StatementUpdateInput, { nullable: false })
  data!: StatementUpdateInput;
}

export { UpdateStatementArgs as UpdateStatementArgs };
