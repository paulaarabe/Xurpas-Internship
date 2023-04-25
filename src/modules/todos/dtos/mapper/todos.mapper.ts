import { TodosEntity } from '@entities/todos.entity';
import { Todo } from '../../interface/todos.interface';

export class TodosMapper {
    public mapToEntity(dto: Todo): TodosEntity {
      const entity = new TodosEntity();
      entity.title = dto.title;
      entity.description = dto.description;
      entity.dueDate = dto.dueDate;
      entity.isCompleted = dto.isCompleted;
      return entity;
    }
  
    public mapToDTO(entity: TodosEntity): Todo {
      const dto: Todo = {
          id: entity.id,
          title: entity.title,
          description: entity.description,
          dateCreated: entity.dateCreated,
          dueDate: entity.dueDate,
          isCompleted: entity.isCompleted,
          dateUpdated: entity.dateUpdated
      };
      return dto;
    }
  }
  