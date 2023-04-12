import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';
import { TodosEntity } from '../../../src/data/entities/todos.entity';
import { CreateTodoInput } from '../dto/input/create-todo.input';
import { UpdateTodoInput } from '../dto/input/update-todo.input';
import { TodosRepository } from '../repository/todos.repository';

export interface Todo extends TodosEntity {}

@Injectable()
export class TodosService {
  findById(id: number): TodosEntity | PromiseLike<TodosEntity> {
    throw new Error('Method not implemented.');
  }
  findOneById(id: number) {
    throw new Error('Method not implemented.');
  }
  getTodos(): Todo[] | PromiseLike<Todo[]> {
    throw new Error('Method not implemented.');
  }
  getAllTodos(): TodosEntity[] | PromiseLike<TodosEntity[]> {
      throw new Error('Method not implemented.');
  }
  getTodoById(_id: number): TodosEntity | PromiseLike<TodosEntity> {
      throw new Error('Method not implemented.');
  }
  createTodo(_newTodo: TodosEntity): TodosEntity | PromiseLike<TodosEntity> {
      throw new Error('Method not implemented.');
  }
  updateTodoById(_id: number, _updatedTodo: any): TodosEntity | PromiseLike<TodosEntity> {
      throw new Error('Method not implemented.');
  }
  deleteTodoById(_id: number): boolean | PromiseLike<boolean> {
      throw new Error('Method not implemented.');
  }
  findAll(): TodosEntity[] | PromiseLike<TodosEntity[]> {
    throw new Error('Method not implemented.');
  }
  findByUserId(_userId: number): TodosEntity[] | PromiseLike<TodosEntity[]> {
    throw new Error('Method not implemented.');
  }
  findByTitle(_title: string): TodosEntity[] | PromiseLike<TodosEntity[]> {
    throw new Error('Method not implemented.');
  }
  findCompleted(): TodosEntity[] | PromiseLike<TodosEntity[]> {
    throw new Error('Method not implemented.');
  }
  findPending(): TodosEntity[] | PromiseLike<TodosEntity[]> {
    throw new Error('Method not implemented.');
  }
 
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

  // async update(id: number, updateTodoInput: UpdateTodoInput): Promise<Todo> {
  //   const todo = await this.findOne(id);
  //   // Update the Todo with the new values
  //   Object.assign(todo, updateTodoInput);
  //   await this.todosRepository.save(todo);
  //   return todo;
  // }

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
  
    if (updateTodoInput.completed !== undefined) {
      todo.isCompleted = updateTodoInput.completed;
    }
  
    if (updateTodoInput.dueDate) { // New block
      todo.dueDate = updateTodoInput.dueDate;
    }
  
    todo.dateUpdated = new Date();
    return this.todosRepository.save(todo);
  }
  
  async delete(id: number): Promise<DeleteResult> {
    return this.todosRepository.delete(id);

  // async remove(id: number): Promise<boolean> {
  //   const todo = await this.findOne(id);
  //   await this.todosRepository.delete(todo);
  //   return true;
  }
}

