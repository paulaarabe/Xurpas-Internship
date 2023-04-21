import { TodosEntity } from '@entities/todos.entity';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';
import { UpdateTodoInput } from '../dto/input/update-todo.input';
import { TodosOutput } from '../dto/output/todos.output';
import { TodosService } from '../service/todos.service';
import { TodosRepository } from '../repository/todos.repository';

@Resolver()
export class TodosResolver {
  constructor(
    private readonly todosService: TodosService,
    private readonly todosRepository: TodosRepository,
  ) {}

  @Mutation(() => TodosEntity)
  async createTodo(
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('dueDate', { nullable: true }) dueDate?: Date,
    @Args('isCompleted', { defaultValue: false }) isCompleted?: boolean,
  ): Promise<TodosEntity> {
    const todo = new TodosEntity();
    todo.title = title;
    todo.description = description;
    todo.dateCreated = new Date();
    todo.dateUpdated = new Date();
    todo.isCompleted = isCompleted;
    todo.dueDate = dueDate;

    return await this.todosRepository.save(todo);
  }

  @Query(() => TodosEntity)
  async todos(@Args('id', { type: () => Int }) id: number) {
    return this.todosService.findOneById(id);
  }

  @Mutation(() => TodosOutput)
  async updateTodo(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateTodoInput') updateTodoInput: UpdateTodoInput,
  ): Promise<TodosEntity> {
    const todo = await this.todosService.update(id, updateTodoInput);
    return todo;
  }

  // @Mutation(() => TodoType) // specify the output type
  // async updateTodo(
  //   @Args('id', { type: () => Int }) id: number,
  //   @Args('updateTodoInput') updateTodoInput: UpdateTodoInput,
  // ): Promise<TodosEntity> {
  //   const todo = await this.todosService.update(id, updateTodoInput);
  //   return todo;
  // }

  // @Mutation(() => Todo)
  // async updateTodo(
  //   @Args('id', { type: () => Int }) id: number,
  //   @Args('updateTodoInput') updateTodoInput: UpdateTodoInput,
  // ) {
  //   return await this.todosService.update(id, updateTodoInput);
  // }

  @Mutation(() => Boolean)
  async deleteTodo(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    const result: DeleteResult = await this.todosService.delete(id);
    return result.affected > 0;
  }
}
