import { TodosEntity } from '@entities/todos.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateTodoInput } from '../dtos/input/create-todo.input';
import { UpdateTodoInput } from '../dtos/input/update-todo.input';
import { TodosRepository } from '../repositories/todos.repository';

@Injectable()
export class TodosService {
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
    return await this.todosRepository.save(createTodoInput);
  }

  async updateTodo(updateTodoInput: UpdateTodoInput): Promise<TodosEntity> {
    return await this.todosRepository.save(updateTodoInput);
  }

  async delete(id: number): Promise<DeleteResult> {
    const result = await this.todosRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return result;
  }
}
