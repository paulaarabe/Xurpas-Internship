import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTodoInput } from '../dto/output/input/create-todo.input';
import { UpdateTodoInput } from '../dto/output/input/update-todo.input';
import { TodosService } from '../services/todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

 @Post()
  createTodo(@Body() CreateTodoInput: CreateTodoInput) {
    return this.todosService.createTodo(CreateTodoInput);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  // @Get()
  // findTodo() {
  //   return {  Todo: 'finish code testing'};
  // }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.todosService.findOne({id});
  }

  @Patch(':id')
  updateTodo(@Param('id') id:string, @Body() UpdateTodoInput: UpdateTodoInput) {
    return this.todosService.updateTodo(+id);
  }
 
  @Delete(':id')
  removeTodo(@Param('id') id: string) {
    return this.todosService.removeTodo(+id);
  }
}
