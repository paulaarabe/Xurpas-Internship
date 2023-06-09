import { TodosEntity } from '@entities/todos.entity';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';
import { UpdateTodoInput } from '../dto/output/input/update-todo.input';
import { TodosOutput } from '../dto/output/todos.output';
import { TodosService } from '../services/todos.service';
import { CreateTodoInput } from '../dto/output/input/create-todo.input';

@Resolver(() => TodosOutput)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  // @Query(() => TodosEntity)
  // async findOne(@Args("id") id: number): Promise<TodosEntity> {
  //   return this.todosService.findOne({ id });
  // }

  @Query(() => [TodosOutput])
  async getAllTodos(): Promise<TodosEntity[]> {
    return this.todosService.getAllTodos();
  }

  @Mutation(() => TodosOutput)
  async createTodo(
    @Args('createTodoInput') createTodoInput: CreateTodoInput,
  ): Promise<TodosOutput> {
    const todo = await this.todosService.createTodo(createTodoInput);
    return createTodoInput;
  }

  @Mutation(() => TodosOutput)
  async updateTodo(
    @Args('updateTodoInput') updateTodoInput: UpdateTodoInput,
  ): Promise<UpdateTodoInput> {
    const todo = await this.todosService.updateTodo(updateTodoInput);
    return updateTodoInput;
  }

  @Mutation(() => Boolean)
  async deleteTodo(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    const result: DeleteResult = await this.todosService.delete(id);
    return result.affected > 0;
  }
}
