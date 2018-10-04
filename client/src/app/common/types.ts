import moment from 'moment'
export interface Task {
    title: string;
    priority: number;
    isDone: boolean;
    dueDate: moment.Moment;
    id: number;
  }