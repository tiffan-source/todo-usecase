export type MarkTodoAsCompletedInput = {
  todoId: string;
};

export type MarkTodoAsCompletedOutput = {
  todoId: string;
  title: string;
  description?: string;
  dueDate?: Date;
  doneDate?: Date;
  labels?: Array<{ id: string; name: string; color: string | null }>;
};
