import { Injectable } from '@nestjs/common';
import { SubjectEntity } from '@entities/subject.entity';
import { CreateSubjectInput } from '../dto/input/create-subject.input';
import { UpdateSubjectInput } from '../dto/input/update-subject.input';
import { SubjectRepository } from '../repository/subject.repository';
import { Subject } from '../interface/subject.interface';

export interface Subject extends SubjectEntity {}

@Injectable()
export class SubjectService {
  constructor(private readonly subjectRepository: SubjectRepository) {}

  async create(createSubjectInput: CreateSubjectInput): Promise<Subject> {
    const subject = this.subjectRepository.create(createSubjectInput);
    return this.subjectRepository.save(subject);
  }

  async findOne(id: number): Promise<Subject> {
    const subject = await this.subjectRepository.findOneById(id);
    if (!subject) {
      // Throw an error if a Subject with the specified ID is not found
      throw new Error(`Subject with ID ${id} not found`);
    }
    return subject;
  }

  async update(id: number, updateSubjectInput: UpdateSubjectInput): Promise<Subject> {
    const subject = await this.findOne(id);
    // Update the Subject with the new values
    Object.assign(subject, updateSubjectInput);
    await this.subjectRepository.save(subject);
    return subject;
  }

  async remove(id: number): Promise<boolean> {
    const subject = await this.findOne(id);
    await this.subjectRepository.delete(subject);
    return true;
  }
}