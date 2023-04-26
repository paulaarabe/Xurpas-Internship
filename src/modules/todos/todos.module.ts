import { Module } from '@nestjs/common';
import { TodosService } from './services/todos.service';
import { TodosResolver } from './resolver/todos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosEntity } from '@entities/todos.entity';
import { TodosRepository } from './repositories/todos.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TodosEntity])],
  providers: [TodosResolver, TodosService, TodosRepository]
})
export class TodosModule {}
