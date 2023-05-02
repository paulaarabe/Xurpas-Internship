import { Module } from '@nestjs/common';
import { SubjectEntity } from '@entities/subject.entity';
import { SubjectService } from './service/subject.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectRepository } from './repository/subject.repository';
import { SubjectResolver } from './resolver/subject.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectEntity])],
  providers: [SubjectService,SubjectRepository,SubjectResolver],
})
export class SubjectModule {}

