export type CreateTodoInput = {
  title: string;
  description?: string;
  dueDate?: Date;
  labelIds?: string[];
  newLabelTitles?: string[];
};

export type CreateTodoOutput = {
  todoId: string;
  title: string;
  description?: string;
  dueDate?: Date;
  doneDate?: Date;
  labels?: Array<{ id: string; name: string; color: string | null }>;
};
