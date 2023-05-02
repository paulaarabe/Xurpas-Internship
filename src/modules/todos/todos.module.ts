import { Module } from '@nestjs/common';
import { TodosService } from './services/todos.service';
import { TodosResolver } from './resolver/todos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
<<<<<<< HEAD
import { TodosEntity } from '@entities/todos.entity';
import { TodosRepository } from './repositories/todos.repository';
=======
import { TodosEntity } from './../../data/entities/todos.entity';
import { TodosRepository } from '../todos/repositories/todos.repository';
>>>>>>> 3225c6843c0a1b7088e9b595fd10a5cb8c037aaf

@Module({
  imports: [TypeOrmModule.forFeature([TodosEntity])],
  providers: [TodosResolver, TodosService, TodosRepository]
})
export class TodosModule {}
