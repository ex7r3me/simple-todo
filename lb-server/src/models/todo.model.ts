import {Model, model, property} from '@loopback/repository';

@model()
export class Todo extends Model {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'boolean',
  })
  isDone?: boolean;

  @property({
    type: 'date',
  })
  dueDate?: string;

  @property({
    type: 'number',
  })
  priority?: number;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}
