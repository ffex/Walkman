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
import { TodoItemWhereUniqueInput } from "./TodoItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TodoItemUpdateInput } from "./TodoItemUpdateInput";

@ArgsType()
class UpdateTodoItemArgs {
  @ApiProperty({
    required: true,
    type: () => TodoItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TodoItemWhereUniqueInput)
  @Field(() => TodoItemWhereUniqueInput, { nullable: false })
  where!: TodoItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TodoItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => TodoItemUpdateInput)
  @Field(() => TodoItemUpdateInput, { nullable: false })
  data!: TodoItemUpdateInput;
}

export { UpdateTodoItemArgs as UpdateTodoItemArgs };