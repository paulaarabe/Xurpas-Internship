import { Module } from '@nestjs/common';
import { SubjectEntity } from '@entities/subject.entity';
import { SubjectService } from './service/subject.service';
import { SubjectController } from './controller/subject.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectEntity])],
  controllers: [SubjectController],
  providers: [SubjectService]
})
export class SubjectModule {}

