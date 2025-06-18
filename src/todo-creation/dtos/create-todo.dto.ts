export type CreateTodoInput = {
  title: string;
  description?: string;
  dueDate?: Date;
  labelIds?: string[];
};

export type CreateTodoOutput = {
  todoId: string;
  title: string;
  description?: string;
  dueDate?: Date;
  labels?: Array<{ title: string; color: string | null }>;
  createdAt: Date;
  updatedAt: Date;
};
