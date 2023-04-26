import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';
import { TodosEntity } from '../../../data/entities/todos.entity';
import { UpdateTodoInput } from '../dto/output/input/update-todo.input';
import { TodosRepository } from '../repositories/todos.repository';

@Injectable()
export class TodosService {
  findOneById(id: number) {
    throw new Error('Method not implemented.');
  }
  getTodoById(id: number): TodosEntity | PromiseLike<TodosEntity> {
    throw new Error('Method not implemented.');
  }
  createTodo(newTodo: TodosEntity): TodosEntity | PromiseLike<TodosEntity> {
    throw new Error('Method not implemented.');
  }
  updateTodoById(id: number, updatedTodo: any): TodosEntity | PromiseLike<TodosEntity> {
    throw new Error('Method not implemented.');
  }
  deleteTodoById(id: number): boolean | PromiseLike<boolean> {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly todosRepository: TodosRepository) {}

  async update(id: number, updateTodoInput: UpdateTodoInput): Promise<TodosEntity> {
    const todo = await this.todosRepository.findOne({ where: { id } });
  
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
  
    if (updateTodoInput.title) {
      todo.title = updateTodoInput.title;
    }
  
    if (updateTodoInput.description) {
      todo.description = updateTodoInput.description;
    }
  
    if (updateTodoInput.isCompleted !== undefined) {
      todo.isCompleted = updateTodoInput.isCompleted;
    }
  
    if (updateTodoInput.dueDate) { 
      todo.dueDate = updateTodoInput.dueDate;
    }
  
    todo.dateUpdated = new Date();
    return this.todosRepository.save(todo);
  }
  
  // Get all todos
  async getAllTodos(): Promise<TodosEntity[]> {
    const todos = await this.todosRepository.find();
    return todos;
  }

  // Create a new todo
  async create(createTodoInput: CreateTodoInput): Promise<TodosEntity> {
    const todo = this.todosRepository.create(createTodoInput);
    return this.todosRepository.save(todo);
  }

  // // Update a todo by its ID
  // async update(id: number, updateTodoInput: Partial<UpdateTodoInput>): Promise<TodosEntity> {
  //   const todo = await this.todosRepository.findOne(id);

  //   if (!todo) {
  //     throw new NotFoundException(`Todo with ID ${id} not found`);
  //   }

  //   Object.assign(todo, updateTodoInput);
  //   todo.dateUpdated = new Date();

  //   return this.todosRepository.save(todo);
  // }

  // Delete a todo by its ID
  async delete(id: number): Promise<DeleteResult> {
    const result = await this.todosRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    return result;
  }
}
