import { Injectable } from '@nestjs/common';
import { SubjectEntity } from '@entities/subject.entity';
import { CreateSubjectInput } from '../dto/input/create-subject.input';
import { UpdateSubjectInput } from '../dto/input/update-subject.input';
import { SubjectRepository } from '../repository/subject.repository';

export interface Subject extends SubjectEntity {}

@Injectable()
export class SubjectService {
  constructor(private readonly subjectRepository: SubjectRepository) {}

  async create(createSubjectInput: CreateSubjectInput): Promise<SubjectEntity> {
    return await this.subjectRepository.save(createSubjectInput);
  }

  async getSubjectsBySubjectId(subjectId: number): Promise<SubjectEntity> {
    return this.subjectRepository.findOneById( subjectId );
  }

  // async findOne(id: number): Promise<Subject> {
  //   const subject = await this.subjectRepository.findOneById(id);
  //   if (!subject) {
  //     // Throw an error if a Subject with the specified ID is not found
  //     throw new Error(`Subject with ID ${id} not found`);
  //   }
  //   return subject;
  // }

  async update(subjectId: number, updateSubjectInput: UpdateSubjectInput): Promise<SubjectEntity> {
    const subject = await this.subjectRepository.findOneById(subjectId);
    // Update the Subject with the new values
    Object.assign(subject, updateSubjectInput);
    await this.subjectRepository.save(subject);
    return subject;
  }

  async remove(subjectId: number): Promise<Boolean> {
    const subject = await this.subjectRepository.findOneById(subjectId);
    await this.subjectRepository.delete(subject);
    return true;
  }

  
}