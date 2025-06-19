export type GetTodoByIdInput = {
  idTodo: string;
};

export type GetTodoByIdOutput = {
  todoId: string;
  title: string;
  description?: string;
  dueDate?: Date;
  doneDate?: Date;
  labels?: Array<{ id: string; name: string; color: string | null }>;
};
