import { TodosEntity } from "@entities/todos.entity";
import { Injectable } from "@nestjs/common";
import { Repository, DataSource } from "typeorm";
import { CreateTodoInput } from "../dto/output/input/create-todo.input";

@Injectable()
export class TodosRepository extends Repository<TodosEntity> {
  createTodo(createTodoInput: CreateTodoInput) {
      throw new Error('Method not implemented.');
  }
  findAllTodos() {
      throw new Error('Method not implemented.');
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
  
  /*async findCompleted(): Promise<TodosEntity[]> {
    return this.find({ where: { completed: true } });
  }*/

  /*async findPending(): Promise<TodosEntity[]> {
    return this.find({ where: { completed: false } });
  }*/

  
}