import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodosEntity } from '@entities/todos.entity';
import { TodosService } from '../service/todos.service';
import { CreateTodoInput } from '../dto/input/create-todo.input';
import { UpdateTodoInput } from '../dto/input/update-todo.input';

@Resolver()
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(() => [TodosEntity])
  async todos(): Promise<TodosEntity[]> {
    return this.todosService.getAllTodos();
  }

  @Query(() => TodosEntity)
  async todoById(@Args('id') id: number): Promise<TodosEntity> {
    return this.todosService.getTodoById(id);
  }

  @Mutation(() => TodosEntity)
  async createTodo(
    @Args('createTodoInput') createTodoInput,
  ): Promise<TodosEntity> {
    const { title, completed, description, dueDate } = createTodoInput;
    const newTodo = new TodosEntity();
    newTodo.title = title;
    newTodo.isCompleted = completed;
    newTodo.description = description;
    newTodo.dueDate = dueDate;
    return this.todosService.createTodo(newTodo);
  }

  @Mutation(() => TodosEntity)
  async updateTodo(
    @Args('id') id: number,
    @Args('updateTodoInput') updateTodoInput,
  ): Promise<TodosEntity> {
    const { title, completed, description, dueDate } = updateTodoInput;
    const updatedTodo = await this.todosService.getTodoById(id);
    updatedTodo.title = title;
    updatedTodo.isCompleted = completed;
    updatedTodo.description = description;
    updatedTodo.dueDate = dueDate;
    return this.todosService.updateTodoById(id, updatedTodo);
  }

  @Mutation(() => Boolean)
  async deleteTodoById(@Args('id') id: number): Promise<boolean> {
    return this.todosService.deleteTodoById(id);
  }
}
