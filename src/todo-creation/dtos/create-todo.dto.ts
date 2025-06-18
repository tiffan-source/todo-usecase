export type CreateTodoInput = {
  title: string;
  description?: string;
  dueDate?: Date;
  labelIds?: string[];
};

export type CreateTodoOutput = {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  labels?: string[];
  createdAt: Date;
  updatedAt: Date;
};
