import { Injectable } from '@nestjs/common';
import { TodosEntity } from '../../../data/entities/todos.entity';
import { CreateTodoInput } from '../dto/output/input/create-todo.input';
import { UpdateTodoInput } from '../dto/output/input/update-todo.input';
import { TodosRepository } from '../repository/todos.repository';

export interface Todo extends TodosEntity {}

@Injectable()
export class TodosService {
  constructor(private readonly todosRepository: TodosRepository) {}

  async create(createTodoInput: CreateTodoInput): Promise<Todo> {
    const todo = this.todosRepository.create(createTodoInput);
    return this.todosRepository.save(todo);
  }

  async findOne(id: number): Promise<Todo> {
    const todo = await this.todosRepository.findOneById(id);
    if (!todo) {
      // Throw an error if a Todo with the specified ID is not found
      throw new Error(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  async update(id: number, updateTodoInput: UpdateTodoInput): Promise<Todo> {
    const todo = await this.findOne(id);
    // Update the Todo with the new values
    Object.assign(todo, updateTodoInput);
    await this.todosRepository.save(todo);
    return todo;
  }

  async remove(id: number): Promise<boolean> {
    const todo = await this.findOne(id);
    await this.todosRepository.delete(todo);
    return true;
  }
}
