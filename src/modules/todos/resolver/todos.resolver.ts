import { TodosEntity } from '@entities/todos.entity';
import { Query, Resolver } from '@nestjs/graphql';
import { TodosOutput } from '../dto/output/todos.output';
import { TodosService } from '../service/todos.service';

@Resolver()
export class TodosResolver {
  todosRepository: any;
  constructor(private readonly todosService: TodosService) {}
  @Query(()=> TodosOutput)

  async getTodos(): Promise<TodosEntity[]> {
    return this.todosRepository.find();
  }

  async getTodosByUserId(userId: number): Promise<TodosEntity[]> {
    return this.todosRepository.find({ where: { userId } });
  }

  async getTodosByTitle(title: string): Promise<TodosEntity[]> {
    return this.todosRepository.find({ where: { title } });
  }

  async getCompletedTodos(): Promise<TodosEntity[]> {
    return this.todosRepository.find({ where: { completed: true } });
  }

  async getPendingTodos(): Promise<TodosEntity[]> {
    return this.todosRepository.find({ where: { completed: false } });
  }
  
 
}
