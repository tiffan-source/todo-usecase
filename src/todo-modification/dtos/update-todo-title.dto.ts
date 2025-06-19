export type UpdateTodoTitleInput = {
  todoId: string;
  title: string;
};

export type UpdateTodoTitleOutput = {
  todoId: string;
  title: string;
  description?: string;
  dueDate?: Date;
  doneDate?: Date;
  labels?: Array<{ id: string; name: string; color: string | null }>;
};
