import { TodosEntity } from "@entities/todos.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { CreateTodoInput } from "../dto/output/input/create-todo.input";

@Injectable()
export class TodosRepository extends Repository<TodosEntity> {
  
  createTodo(createTodoInput: CreateTodoInput) {
    throw new Error('Method not implemented.');
  }

  async findAllTodos(): Promise<TodosEntity[]> {
    return this.find();
  }
  
  constructor(private readonly dataSource: DataSource) {
    super(TodosEntity, dataSource.createEntityManager());
  }

  async findOneById(id: number): Promise<TodosEntity> {
    return super.findOne({ where: { id } });
  }

  async findAll(): Promise<TodosEntity[]> {
    return this.find();
  }
  
  async findCompleted(): Promise<TodosEntity[]> {
    return this.find({ where: { isCompleted: true } });
  }

  async findPending(): Promise<TodosEntity[]> {
    return this.find({ where: { isCompleted: false } });
  }
  
}