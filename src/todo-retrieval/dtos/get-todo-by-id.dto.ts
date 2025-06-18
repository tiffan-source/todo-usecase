export type GetTodoByIdInput = {
  idTodo: string;
};

export type GetTodoByIdOutput = {
  todoId: string;
  title: string;
  description?: string;
  dueDate?: Date;
  labels?: Array<{ title: string; color: string | null }>;
};
