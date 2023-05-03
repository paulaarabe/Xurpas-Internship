import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectMappingEntity } from '@entities/subject_mapping.entity';
import { SubjectMapService } from './service/subject_mapping.service';
import { SubjectMapRepository } from './repository/subject_mapping.repository';
import { SubjectMapResolver } from './resolver/subject_mapping.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([SubjectMappingEntity])],
    providers: [SubjectMapService,SubjectMapRepository,SubjectMapResolver],
})
export class SubjectMappingModule {}
