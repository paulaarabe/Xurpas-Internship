import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TodosOutput{
    
  @Field(() => ID, { nullable: true })
  id?: number;

  @Field({ nullable: false })
  title: string;

  @Field({ nullable: true })
  description: string;

  @Field({ nullable: false, defaultValue: false })
  completed: boolean;
  
  @Field({ nullable: false })
  dateCreated: Date;
  
  @Field({ nullable: false })
  dateUpdated: Date;

  @Field({ nullable: false, defaultValue: false })
  isCompleted: boolean;

<<<<<<< HEAD:src/modules/todos/dto/output/todos.output.ts
=======
  @Field({ nullable: true })
  dueDate: Date; 
>>>>>>> 3225c6843c0a1b7088e9b595fd10a5cb8c037aaf:src/modules/todos/dtos/output/todos.output.ts
}