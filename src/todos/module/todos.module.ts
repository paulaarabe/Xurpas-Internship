import { Module } from '@nestjs/common';
import { TodosService } from '../service/todos.service';
import { TodosResolver } from '../resolver/todos.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosEntity } from '@entities/todos.entity';
import { TodosRepository } from '../repository/todos.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TodosEntity])],
  providers: [TodosResolver, TodosService, TodosRepository]
})
export class TodosModule {}
