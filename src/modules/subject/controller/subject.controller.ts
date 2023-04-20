import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectService } from '../service/subject.service';
import { CreateSubjectInput } from '../dto/input/create-subject.input';
import { UpdateSubjectInput } from '../dto/input/update-subject.input';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Post()
  create(@Body() CreateSubjectInput: CreateSubjectInput) {
    return this.subjectService.create(CreateSubjectInput);
  }

  // @Get()
  // findAll() {
  //   return this.subjectService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateSubjectInput: UpdateSubjectInput) {
    return this.subjectService.update(+id, UpdateSubjectInput);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectService.remove(+id);
  }
}
