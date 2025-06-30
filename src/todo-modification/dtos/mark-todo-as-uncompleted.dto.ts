export type MarkTodoAsUncompletedInput = {
  todoId: string;
};

export type MarkTodoAsUncompletedOutput = {
  todoId: string;
  title: string;
  description?: string;
  dueDate?: Date;
  doneDate?: Date;
  labels?: Array<{ id: string; name: string; color: string | null }>;
};
