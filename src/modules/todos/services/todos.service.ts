import { TodosEntity } from '@entities/todos.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';
import { CreateTodoInput } from '../dto/output/input/create-todo.input';
import { UpdateTodoInput } from '../dto/output/input/update-todo.input';
import { TodosRepository } from '../repositories/todos.repository';

@Injectable()
export class TodosService {
  create(createTodoInput: CreateTodoInput) {
    throw new Error('Method not implemented.');
  }
  updateTodo(arg0: number) {
    throw new Error('Method not implemented.');
  }
  // update(updateTodoInput: UpdateTodoInput) {
  //   throw new Error('Method not implemented.');
  // }
  findOne(arg0: { id: number; }): TodosEntity | PromiseLike<TodosEntity> {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  // updateTodo(arg0: number) {
  //   throw new Error('Method not implemented.');
  // }
  removeTodo(arg0: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private todosRepository: TodosRepository) {}

  async getAllTodos(): Promise<TodosEntity[]> {
    return this.todosRepository.find();
  }

  // async findOne(id: number): Promise<TodosEntity> {
  //   const todo = await this.todosRepository.findOne({ id });
  //   if (!todo) {
  //     throw new NotFoundException(`Todo with ID ${id} not found`);
  //   }
  //   return todo;
  // }

  async createTodo(createTodoInput: CreateTodoInput): Promise<TodosEntity> {
    const { title, description, dueDate, isCompleted } = createTodoInput;

    const todo = new TodosEntity();
    todo.title = title;
    todo.description = description;
    todo.dueDate = dueDate;
    todo.isCompleted = isCompleted;

    return this.todosRepository.save(todo);
  }

  async update(id: number, updateTodoInput: UpdateTodoInput): Promise<TodosEntity> {
    const { title, description, dueDate, isCompleted } = updateTodoInput;

    const todo = await this.todosRepository.findOne({ where: { id } });
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    todo.title = title ?? todo.title;
    todo.description = description ?? todo.description;
    todo.dueDate = dueDate ?? todo.dueDate;
    todo.isCompleted = isCompleted ?? todo.isCompleted;

    return this.todosRepository.save(todo);
  }

  async delete(id: number): Promise<DeleteResult> {
    const result = await this.todosRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return result;
  }
}
